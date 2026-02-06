---
layout: default
---

# Neurohackademy Course Content

This page contains all the Neurohackademy lectures and presentations throughout
the years. When available, session titles are linked to video recordings.
Please click the heading for the year, below, to show the course content for
that year.


<center style="margin-top: 20px; margin-bottom: 60px">
{% for y in site.data.calendar %}
  <a href="#year{{y[0]}}" style="margin:10px" id="quicklink{{y[0]}}" class="quicklink">{{y[0]}}</a>
  {% unless forloop.last %} &middot; {% endunless %}
{% endfor %}
</center>


<div class="my-accordion" id="courseAccordion">
  {% for y in site.data.calendar %}
    <div class="accordion-item">
      <hr/>
      <a id="year{{y[0]}}" style="scroll-margin-top: 200px"></a>
      <h2>
        <button aria-expanded="true"
                aria-controls="panel{{y[0]}}" 
                id="accbutton{{y[0]}}"
                class="accordion-header">
          {{y[0]}} Calendar
          </button>
        </h2>
      <div id="panel{{y[0]}}"
           role="region"
           aria-labelledby="accbutton{{y[0]}}"
           class="accordion-panel">
        <p>
          The {{y[0]}} Neurohackademy ran from Monday
          {{ y[1].startdate | date: "%B %-d, %Y" }} through Friday,
          {{ y[1].startdate | date: "%s" | plus: 950400 | date: "%B %-d, %Y" }}.
          </p>
        <h3>Week 1</h3>
        <div class="week-row">
          {% for day in y[1].events.week1 %}
            <div class="day-col">
              <p class="day-name">{{day[0]}}</p>
              {% for ev in day[1] %}
                <div class="event-cell">
                  <p class="event-time">{{ev.time}}</p>
                  <p class="event-title">
                    {% if ev.youtube_url %}<a href="{{ev.youtube_url}}">{% endif %}
                    {{ev.title}}
                    {% if ev.youtube_url %}</a>{% endif %}
                    </p>
                  {% if ev.speakers %}
                    <p class="event-speakers">{{ev.speakers | join: ", "}}</p>
                    {% endif %}
                  </div>
                {% endfor %}
              </div>
            {% endfor %}
          </div>
        <h3>Week 2</h3>
        <div class="week-row">
          {% for day in y[1].events.week2 %}
            <div class="day-col">
              <p class="day-name">{{day[0]}}</p>
              {% for ev in day[1] %}
                <div class="event-cell">
                  <p class="event-time">{{ev.time}}</p>
                  <p class="event-title">
                    {% if ev.youtube_url %}<a href="{{ev.youtube_url}}">{% endif %}
                    {{ev.title}}
                    {% if ev.youtube_url %}</a>{% endif %}
                    </p>
                  {% if ev.speakers %}
                    <p class="event-speakers">{{ev.speakers | join: ", "}}</p>
                    {% endif %}
                  </div>
                {% endfor %}
              </div>
            {% endfor %}
          </div>
        </div>
      </div>
    {% endfor %}
  </div>


<!-- This script is for the accordion behavior of the page; each year's
     calendar is included in an accordion cell that expands when clicked. -->
<script>
const headers = document.querySelectorAll('.accordion-header');
const firstHeader = headers[0];
headers.forEach(button => {
  const year = button.id.slice(-4);
  const tag = document.getElementById("year" + year);
  if (button === firstHeader) {
    button.setAttribute('aria-expanded', 'true');
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    panel.style.display = 'block';
  } else {
    button.setAttribute('aria-expanded', 'false');
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    panel.style.display = 'none';
  }
  button.addEventListener('click', () => {
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    const expanded = button.getAttribute('aria-expanded') === 'true';
    // Close all panels
    headers.forEach(h => {
      h.setAttribute('aria-expanded', 'false');
      document.getElementById(h.getAttribute('aria-controls')).style.display = 'none';
    });
    // Open the clicked panel if it was previously closed
    if (!expanded) {
      button.setAttribute('aria-expanded', 'true');
      panel.style.display = 'block';
    }
    // Scroll to it if needed.
    tag.scrollIntoView({
      behavior: 'smooth', // Optional: for smooth scrolling animation
      block: 'start'      // Optional: aligns the top of the element to the top of the viewport
    });
  });
  // Keyboard support (Enter/Space)
  button.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      button.click();
    }
  });
});
/* Same thing but for the quick links */
const qlinks = document.querySelectorAll('.quicklink');
qlinks.forEach(qlink => {
  const year = qlink.id.slice(-4);
  const button = document.getElementById("accbutton" + year);
  qlink.addEventListener('click', () => {
    button.click();
  });
});
</script>
