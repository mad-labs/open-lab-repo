---
layout: default
---
<!-- Main -->
<div id="main" class="wrapper style1">
    <div class="container">
        <header class="major major-green">
            <h2>Welcome to Mad Labs - Open Lab</h2>
            <p>Open Lab is a weekly meeting for developers who are interested in learning technology, sharing experiences or simple code for a couple of hours after work.</p>
            <p>We meet every Wednesday from <em>19:00</em> to <em>22:00</em>, kindly hosted by <a href="http://mikamai.com/">Mikamai</a> and <a href="http://linkme.it/">LinkMe</a> in the <a href="http://venini42.it/">venini42</a> space - Via Venini, 42 - MILANO.</p>
            <p>The meetings are designed to educate, inspire, and connect developers of all experience, and there are open to anyone interested or involved in development.</p>
            <p>Feel free to join us with our current projects or bring your own and ask for an hand....</p>
            <p>Here all developers are welcome.</p>
        </header>
    </div>
</div>
<!-- Content -->
{% if site.posts.size == 0 %}
<section id="five" class="wrapper style2 fade">
    <div class="container">
        <h3><a href="{{ site.baseurl }}{{ post.url }}">Sorry...</a></h3>
        No content found...
    </div>
    <section class="special">
            <ul class="actions">
                <li><a href="{{ site.baseurl }}" class="button">Home</a></li>
            </ul>
    </section>
</section>
{% else %}
{% for post in site.posts %}
{% if post.highlighted == true %}
<!-- Five -->
<section id="five" class="wrapper style2 fade">
    <div class="container">
        <span class="image right"><img src="/src/assets/images/128px-Mad_scientist_transparent_background.svg.png" alt=""></span>
        <h3><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h3>
        {{ post.excerpt }}
    </div>
    <section class="special">
            <ul class="actions">
                <li><a href="{{ site.baseurl }}{{ post.url }}" class="button">Read more</a></li>
            </ul>
    </section>
</section>
{% endif %}
{% endfor %}
{% for post in site.posts %}
{% if post.highlighted != true %}
<section id="content">
    <div class="wrapper style1">
        <div class="container">
            <span class="image right"><img src="/src/assets/images/128px-Mad_scientist_transparent_background.svg.png" alt=""></span>
            <h3><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h3>
            {{ post.excerpt }}
        </div>   
    </div>
    <section class="special">
        <ul class="actions">
            <li><a href="{{ site.baseurl }}{{ post.url }}" class="button">Read more</a></li>
        </ul>
    </section>
</section>
{% endif %}
{% endfor %}
{% endif %}

