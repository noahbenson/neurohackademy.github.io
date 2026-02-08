---
layout: default
---

# Neurohackademy Course Content

This page contains all the Neurohackademy lectures and presentations throughout
the years. When available, session titles are linked to video recordings.
Please click the heading for the year, below, to show the course content for
that year.


<hr/>


<div class="cc-list">
  {% for y in site.data.calendar %}
    {% for w in y[1].events %}
      {% for d in w[1] %}
        {% for ev in d[1] %}
          {% assign year=y[0] %}
          {% assign week=w[0] %}
          {% assign day=d[0] %}
          {% assign speakers=ev.speakers | join: ", " %}
          {% include ccrow.html
               year=year
               week=week
               day=day
               time=ev.time
               title=ev.title
               speakers=speakers
               youtube_url=ev.youtube_url
               %}
          {% endfor %}
        {% endfor %}
      {% endfor %}
    {% endfor %}
  </div>

<script>
  {% include ccexpand.js %}
  </script>
      
