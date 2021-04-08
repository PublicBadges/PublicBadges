data "aws_iam_policy_document" "registry_bucket_read_access" {
  statement {
    actions = [
      "s3:ListBucket",
      "s3:GetObject",
    ]

    resources = [
      "${aws_s3_bucket.registry_bucket.arn}/",
      "${aws_s3_bucket.registry_bucket.arn}/*"
    ]
  }
}

data "aws_iam_policy_document" "registry_event_bus_write_access" {
  statement {
    actions = [
      "events:PutEvents"
    ]

    resources = [
      aws_cloudwatch_event_bus.registry_event_bus.arn
    ]
  }
}

data "aws_iam_policy_document" "registry_bucket_write_access" {
  statement {
    actions = [
      "s3:PutObject",
      "s3:PutObjectAcl"
    ]

    resources = [
      "${aws_s3_bucket.registry_bucket.arn}/",
      "${aws_s3_bucket.registry_bucket.arn}/*"
    ]
  }
}

resource "aws_iam_policy" "registry_bucket_read_access" {
  name = "${local.bucket}-read-access-policy-${var.environment_name}"
  path   = "/"
  policy = data.aws_iam_policy_document.registry_bucket_read_access.json
}

resource "aws_iam_policy" "registry_bucket_write_access" {
  name = "${local.bucket}-write-access-policy-${var.environment_name}"
  path   = "/"
  policy = data.aws_iam_policy_document.registry_bucket_write_access.json
}

resource "aws_iam_policy" "registry_event_bus_write_access" {
  name = "${local.event_bus}-write-access-policy-${var.environment_name}"
  path   = "/"
  policy = data.aws_iam_policy_document.registry_event_bus_write_access.json
}
