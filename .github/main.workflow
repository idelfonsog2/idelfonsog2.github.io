workflow "make QA build" {
  on = "pull_request_review_comment"
  resolves = ["fastlane"]
}

action "fastlane" {
  uses = "fastlane"
}
