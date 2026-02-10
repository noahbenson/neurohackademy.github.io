---
layout: default
---

{% assign allpeople = site.pages
   | where_exp: "page", "page.path contains 'people/'"
   | where_exp: "page", "page.layout == 'person'"
   | sort: "surname" %}
{% capture allroles %}
{% for person in allpeople %}{{ person.role | strip | capitalize }} {% endfor %}
{% endcapture %}

{% assign allroles = allroles
   | strip
   | split: " "
   | sort
   | uniq %}

<style>
h2 {
    line-height: 1.1em;
    margin-top: 50px;
}
</style>


# People

The Neurohackademy is made possibly by many dedicated staff who organize the
event and a community of scholars who curate and present the course content.


{% for role in allroles %}

## {{role}}s

{% for page in allpeople %}
  {% assign pagerole = page.role | capitalize %}
  {% if pagerole == role %}
    {% assign fullname = page.forename | append: " " | append: page.surname %}
<hr/>
{% include biocard.html
     fullname=fullname
     pronouns=page.pronouns
     div=page.div
     org=page.org
     email=page.email
     github=page.github
     website=page.website
     image=page.image
     url=page.url
     size='small'
     %}
    {% endif %}
  {% endfor %}
<hr/>

{% endfor %}
