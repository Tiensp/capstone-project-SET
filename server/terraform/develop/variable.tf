variable "do_token" {
  description = "Digital Ocean Personal access token"
  type        = string
  default     = "dop_v1_689522a1ffb8fc6416256e57aba626dc4e34029806d7de079d4c0ca832bc5342  "
}

variable "pvt_key" {
  description = "Digital Ocean private key"
  type        = string
  default     = "~/.ssh/id_rsa"
}