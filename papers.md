---
title: "Papers"
permalink: /papers/
description: Migrated from legacy IBS WordPress.
canonical_url: https://sangiloum.github.io/papers/
featured_image: /assets/legacy/2019/05/kang-oum-2.jpg
featured_image_source: og_image
---

{% assign all_papers = site.papers | sort: "sort_key" | reverse %}

{% assign preprints = all_papers | where: "category", "preprint" %}
{% assign journals = all_papers | where: "category", "journal" %}
{% assign thesis = all_papers | where: "category", "thesis" %}
{% assign conferences = all_papers | where: "category", "conference" %}
{% assign others = all_papers | where: "category", "other" %}
{% assign manuscripts = all_papers | where: "category", "manuscript" %}

<div class="papers-search" role="search">
  <label for="papers-search-input">Search papers</label>
  <input id="papers-search-input" type="search" placeholder="Title, coauthor, venue, year..." autocomplete="off">
  <details class="papers-coauthors">
    <summary>Filter by Coauthors</summary>
    <div id="papers-coauthor-buttons" class="papers-coauthor-buttons"></div>
  </details>
  <p id="papers-search-status" class="papers-search-status" aria-live="polite"></p>
</div>

## Preprints

{% include paper_list.html papers=preprints %}

[My papers on arXiv](https://arxiv.org/a/oum_s_1.html)

## Journal Papers

{% include paper_list.html papers=journals group_by_year=true %}

## Ph.D. Thesis

{% include paper_list.html papers=thesis %}

## Conference Papers

{% include paper_list.html papers=conferences group_by_year=true %}

## Other

{% include paper_list.html papers=others %}

## Manuscripts

{% include paper_list.html papers=manuscripts %}

[AMS MathSciNet Author ID: 765385](https://mathscinet.ams.org/mathscinet/search/author.html?mrauthid=765385)  
[Scopus Author ID: 55912957400](https://www.scopus.com/authid/detail.uri?authorId=55912957400)  
[ResearchID: C-1692-2011](https://publons.com/researcher/2805090/sang-il-oum/)  
[Google Scholar](https://scholar.google.com/citations?user=EsMssA0AAAAJ&hl=en)

<script>
  (function () {
    var input = document.getElementById("papers-search-input");
    var status = document.getElementById("papers-search-status");
    var coauthorBox = document.getElementById("papers-coauthor-buttons");
    if (!input || !coauthorBox) return;

    var coauthorMap = {
      {% for co in site.data.people %}
      {% capture co_full_name %}{{ co.firstname }}{% if co.lastname != "" %} {{ co.lastname }}{% endif %}{% endcapture %}
      {{ co.id | jsonify }}: {{ co_full_name | strip | jsonify }}{% unless forloop.last %},{% endunless %}
      {% endfor %}
    };

    var items = Array.prototype.slice.call(document.querySelectorAll(".paper-list .paper-item"));
    var lists = Array.prototype.slice.call(document.querySelectorAll(".paper-list"));
    var total = items.length;
    var NONE_COAUTHOR_KEY = "__none__";
    var activeCoauthor = null;

    function normalize(text) {
      return (text || "").toLowerCase().trim();
    }

    function getItemCoauthors(item) {
      if (!item.dataset.coauthors) return [];
      return item.dataset.coauthors.split(",").map(function (s) { return s.trim(); }).filter(Boolean);
    }

    function updateStatus(shown, query) {
      if (!status) return;
      if (!query && !activeCoauthor) {
        status.textContent = "Showing all " + total + " papers.";
        return;
      }
      var parts = [];
      if (query) parts.push("query \"" + query + "\"");
      if (activeCoauthor) {
        if (activeCoauthor === NONE_COAUTHOR_KEY) {
          parts.push("coauthor \"None\"");
        } else {
          parts.push("coauthor \"" + (coauthorMap[activeCoauthor] || activeCoauthor) + "\"");
        }
      }
      status.textContent = "Found " + shown + " paper" + (shown === 1 ? "" : "s") + " for " + parts.join(" + ") + ".";
    }

    function refreshYearHeaders() {
      lists.forEach(function (list) {
        var prev = list.previousElementSibling;
        if (prev && prev.tagName === "H3") {
          prev.hidden = list.hidden;
        }
      });
    }

    function updateCoauthorButtonState() {
      var resetBtn = coauthorBox.querySelector("button[data-coauthor-all]");
      if (resetBtn) {
        resetBtn.classList.toggle("is-active", !activeCoauthor);
      }
      var buttons = Array.prototype.slice.call(coauthorBox.querySelectorAll("button[data-coauthor]"));
      buttons.forEach(function (button) {
        var cid = button.getAttribute("data-coauthor");
        button.classList.toggle("is-active", cid === activeCoauthor);
      });
    }

    function applyFilter() {
      var query = normalize(input.value);
      var shown = 0;

      items.forEach(function (item) {
        var text = normalize(item.textContent);
        var itemCoauthors = getItemCoauthors(item);
        var queryOk = !query || text.indexOf(query) !== -1;
        var coauthorOk = !activeCoauthor ||
          (activeCoauthor === NONE_COAUTHOR_KEY ? itemCoauthors.length === 0 : itemCoauthors.indexOf(activeCoauthor) !== -1);
        var visible = queryOk && coauthorOk;
        item.hidden = !visible;
        if (visible) shown += 1;
      });

      lists.forEach(function (list) {
        var hasVisible = !!list.querySelector(".paper-item:not([hidden])");
        list.hidden = !hasVisible;
      });

      refreshYearHeaders();
      updateCoauthorButtonState();
      updateStatus(shown, query);
    }

    function renderCoauthorButtons() {
      var counts = {};
      var noneCount = 0;
      items.forEach(function (item) {
        var itemCoauthors = getItemCoauthors(item);
        if (itemCoauthors.length === 0) noneCount += 1;
        itemCoauthors.forEach(function (cid) {
          counts[cid] = (counts[cid] || 0) + 1;
        });
      });

      var rows = Object.keys(counts).map(function (cid) {
        return { id: cid, name: coauthorMap[cid] || cid, count: counts[cid] };
      }).sort(function (a, b) {
        if (b.count !== a.count) return b.count - a.count;
        return a.name.localeCompare(b.name);
      });

      var frag = document.createDocumentFragment();

      var reset = document.createElement("button");
      reset.type = "button";
      reset.className = "papers-coauthor-btn is-active";
      reset.setAttribute("data-coauthor-all", "1");
      reset.textContent = "All (" + total + ")";
      reset.addEventListener("click", function () {
        activeCoauthor = null;
        applyFilter();
      });
      frag.appendChild(reset);

      var noneBtn = document.createElement("button");
      noneBtn.type = "button";
      noneBtn.className = "papers-coauthor-btn";
      noneBtn.setAttribute("data-coauthor", NONE_COAUTHOR_KEY);
      noneBtn.textContent = "None (" + noneCount + ")";
      noneBtn.addEventListener("click", function () {
        activeCoauthor = (activeCoauthor === NONE_COAUTHOR_KEY) ? null : NONE_COAUTHOR_KEY;
        applyFilter();
      });
      frag.appendChild(noneBtn);

      rows.forEach(function (row) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "papers-coauthor-btn";
        btn.setAttribute("data-coauthor", row.id);
        btn.textContent = row.name + " (" + row.count + ")";
        btn.addEventListener("click", function () {
          activeCoauthor = (activeCoauthor === row.id) ? null : row.id;
          applyFilter();
        });
        frag.appendChild(btn);
      });

      coauthorBox.appendChild(frag);
    }

    input.addEventListener("input", applyFilter);
    renderCoauthorButtons();
    applyFilter();
  })();
</script>
