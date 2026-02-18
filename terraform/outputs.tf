
output "cname" {
  value       = aws_elastic_beanstalk_environment.env.cname
  description = "The URL of the Elastic Beanstalk Environment"
}

output "domain_url" {
  value       = "https://nodejs.aibackrooms.com"
  description = "The custom domain URL"
}
