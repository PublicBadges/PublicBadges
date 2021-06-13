resource "aws_ses_template" "organization_approval_requested_template" {
  name    = "${local.template_prefix}-organization_approval-requested"
  subject = "{{displayName}} applied to the PublicSpaces Registry"
  html    = file("${path.root}/emailTemplates/compiled/organization_approval_requested.html")
  text    = file("${path.root}/emailTemplates/compiled/organization_approval_requested.md")
}

resource "aws_ses_template" "pending_organization_registration_template" {
  name    = "${local.template_prefix}-pending-organization"
  subject = "Your Application for {{displayName}} for the PublicSpaces Registry is Under Consideration"
  html    = file("${path.root}/emailTemplates/compiled/pending_organization_registration.html")
  text    = file("${path.root}/emailTemplates/compiled/pending_organization_registration.md")
}

resource "aws_ses_template" "approved_organization_registration_template" {
  name    = "${local.template_prefix}-approved-organization"
  subject = "{{displayName}} was accepted to the PublicSpaces Registry"
  html    = file("${path.root}/emailTemplates/compiled/approved_organization_registration.html")
  text    = file("${path.root}/emailTemplates/compiled/approved_organization_registration.md")
}
