### Who am I?

![{{ page.whoami.image.title }}]({{ page.whoami.image.url | prepend: site.baseurl }})

{{ page.whoami.name }}

{% for resume_row in page.whoami.resume %}
  * {{ resume_row }}

{% endfor %}
<!-- next-slide -->
