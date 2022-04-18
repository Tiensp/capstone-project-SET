resource "digitalocean_record" "CNAME-www" {
  domain = "thanhhoangtnt.xyz"
  type = "A"
  name = "www"
  value = "167.71.200.250"
}