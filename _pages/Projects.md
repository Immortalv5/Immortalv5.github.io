---
title: "Projects"
permalink: /project/
author_profile: true
layout: archive
header:
  image: "./images/Back.jpg"
---

{% for post in site.posts %}
  {% include archive-single.html %}
{% endfor %}
