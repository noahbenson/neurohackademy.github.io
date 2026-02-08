---
layout: default
---

# Neurohackademy Course Content

This page contains all the Neurohackademy lectures and presentations throughout
the years. When available, session titles are linked to video recordings.
Please click the heading for the year, below, to show the course content for
that year.


<hr/>

<!-- Here we have the filters panel.
  --> 
<div class="cc-sel-year-maindiv">
  <p style="margin: 8px 16px;">Year:</p>
  <div class="cc-sel-year-yearsdiv">
    <label style="cc-sel-byear-label">
      <input type="checkbox"
             name="cc-sel-year"
             value="none">
      None
      </label>
    {% for y in site.data.calendar reversed %}
      <label style="cc-sel-byear-label">
        <input type="checkbox"
               name="cc-sel-year"
               value="{{y[0]}}">
        {{y[0]}}
        </label>
      {% endfor %}
    <label style="cc-sel-byear-label">
      <input type="checkbox"
             name="cc-sel-year"
             value="all">
      All
      </label>
    </div>
  </div>

<hr/>

<!-- Here we have the list of events.
  --> 
<div class="cc-list">
  {% for y in site.data.calendar %}
    <div class="cc-year-div" id="cc-year-div-{{y[0]}}">
      <h2 class="cc-year-h2">{{y[0]}}</h2>
      {% for w in y[1].events %}
        {% assign weekno=w[0] | slice: 4 %}
        <div class="cc-week-div" id="cc-week-div-{{y[0]}}-{{weekno}}">
          <h3 class="cc-week-h3">Week {{weekno}}</h3>
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
          </div>
        {% endfor %}
      </div>
    {% endfor %}
  </div>

<script>
  {% include ccexpand.js %}
  </script>
<script>
  {% include ccfilter.js %}
  </script>
      
