resource "aws_cloudwatch_event_bus" "event_bus" {
  name = local.event_bus
  tags = {
    Environment = var.environment_name
  }
}

data "aws_iam_policy_document" "event_bus_write_access" {
  statement {
    actions = [
      "events:PutEvents"
    ]

    resources = [
      aws_cloudwatch_event_bus.event_bus.arn
    ]
  }
}

resource "aws_iam_policy" "event_bus_write_access" {
  name = "${local.event_bus}-write-access-policy"
  path   = "/"
  policy = data.aws_iam_policy_document.event_bus_write_access.json
}
