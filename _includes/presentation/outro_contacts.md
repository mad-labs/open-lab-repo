
# Thanks
<!-- next-slide -->

### My contacts

{% for contacts_row in page.whoami.contacts %}
  * {{ contacts_row }}

{% endfor %}

~

* This slides - [{{ page.url | prepend: "http://www.madlabs.it/icebreakers" }}]({{ page.url | prepend: "http://www.madlabs.it/icebreakers" }})