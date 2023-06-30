---
title: News
description: News items in reverse chronological order.
layout: default
eleventyNavigation:
  key: News
  order: 10
pagination:
  data: collections.news
  size: 3
  alias: items
  reverse: true
---

{% include 'pagination-count.html' %}
<hr />
{% for item in items %}
  <article>
    <h4>
      <a href="{{item.url}}">{{ item.data.title }}</a>
    </h4>
    <p>
      Posted {{ item.date | readableDate }}
    </p>
    {{item.templateContent}}
  </article>
  <hr />
{% endfor %}

{% include 'pagination-nav.html' %}
