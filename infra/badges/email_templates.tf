resource "aws_ses_template" "badge_application_status_changed_template" {
  name    = "${local.template_prefix}-badge-application-status-changed"
  subject = "Your {{badgeName}} Application was updated to {{status}}"
  html    = file("${path.root}/emailTemplates/compiled/badge_application_status_changed.html")
  text    = file("${path.root}/emailTemplates/compiled/badge_application_status_changed.md")
}
