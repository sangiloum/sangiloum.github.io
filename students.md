---
title: "Students & Postdocs"
permalink: /students/
description: Migrated from legacy IBS WordPress.
canonical_url: https://sangiloum.github.io/students/
featured_image: /assets/legacy/2022/10/dimag2022-2L4.jpg
featured_image_source: og_image
---

### Current Graduate Students

{% include student_current_list.html %}

### Current Postdocs

{% include postdoc_current_list.html %}

### Former Graduate Students

{% include student_former_list.html %}

### Former Postdocs

{% include postdoc_former_list.html %}

# Papers written by my students *NOT* coauthored with me

I am not a co-author of some of the papers of my students. Below, I try to list such papers.

{% assign all_student_papers = site.student_papers | sort: "sort_key" | reverse %}
{% assign journal_papers = all_student_papers | where: "category", "journal" %}
{% assign journal_submitted = journal_papers | where: "subcategory", "submitted" %}
{% assign journal_published = journal_papers | where_exp: "paper", "paper.subcategory != 'submitted'" %}
{% assign conference_papers = all_student_papers | where: "category", "conference" %}

<div class="papers-search" role="search">
  <label for="students-search-input">Search student papers</label>
  <input id="students-search-input" type="search" placeholder="Title, student, venue, year..." autocomplete="off">
  <details class="papers-coauthors">
    <summary>Filter by Students</summary>
    <div id="students-filter-buttons" class="papers-coauthor-buttons"></div>
  </details>
  <p id="students-search-status" class="papers-search-status" aria-live="polite"></p>
</div>

## Journal papers

### Submitted

{% include student_paper_list.html papers=journal_submitted %}

{% include student_paper_list.html papers=journal_published group_by_year=true %}

## Refereed Conference Papers

{% include student_paper_list.html papers=conference_papers group_by_year=true %}

<script>
  (function () {
    var input = document.getElementById("students-search-input");
    var status = document.getElementById("students-search-status");
    var filterBox = document.getElementById("students-filter-buttons");
    if (!input || !filterBox) return;

    {% capture used_mystudent_ids -%}{%- for p in all_student_papers -%}{%- assign p_mystudents = p.mystudents | default: empty -%}{%- for sid in p_mystudents -%}|{{ sid }}|{%- endfor -%}{%- endfor -%}{%- endcapture -%}
    var studentMap = {
      {%- assign first_student_map_item = true -%}
      {%- for person in site.data.people -%}
        {%- capture sid_token -%}|{{ person.id }}|{%- endcapture -%}
        {%- if used_mystudent_ids contains sid_token -%}
          {%- capture person_full_name -%}{{ person.firstname }}{% if person.lastname != "" %} {{ person.lastname }}{% endif %}{%- endcapture -%}
          {%- unless first_student_map_item -%},{%- endunless -%}
          {{ person.id | jsonify }}: {{ person_full_name | strip | jsonify }}
          {%- assign first_student_map_item = false -%}
        {%- endif -%}
      {%- endfor -%}
    };

    var items = Array.prototype.slice.call(document.querySelectorAll(".paper-list .student-paper-item"));
    var lists = Array.prototype.slice.call(document.querySelectorAll(".paper-list"));
    var total = items.length;
    var activeStudent = null;

    function normalize(text) {
      return (text || "").toLowerCase().trim();
    }

    function getItemStudents(item) {
      if (!item.dataset.mystudents) return [];
      return item.dataset.mystudents.split(",").map(function (s) { return s.trim(); }).filter(Boolean);
    }

    function updateStatus(shown, query) {
      if (!status) return;
      if (!query && !activeStudent) {
        status.textContent = "Showing all " + total + " student papers.";
        return;
      }
      var parts = [];
      if (query) parts.push("query \"" + query + "\"");
      if (activeStudent) {
        parts.push("student \"" + (studentMap[activeStudent] || activeStudent) + "\"");
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

    function updateFilterButtonState() {
      var resetBtn = filterBox.querySelector("button[data-student-all]");
      if (resetBtn) {
        resetBtn.classList.toggle("is-active", !activeStudent);
      }
      var buttons = Array.prototype.slice.call(filterBox.querySelectorAll("button[data-student]"));
      buttons.forEach(function (button) {
        var sid = button.getAttribute("data-student");
        button.classList.toggle("is-active", sid === activeStudent);
      });
    }

    function applyFilter() {
      var query = normalize(input.value);
      var shown = 0;

      items.forEach(function (item) {
        var text = normalize(item.textContent);
        var itemStudents = getItemStudents(item);
        var queryOk = !query || text.indexOf(query) !== -1;
        var studentOk = !activeStudent || itemStudents.indexOf(activeStudent) !== -1;
        var visible = queryOk && studentOk;
        item.hidden = !visible;
        if (visible) shown += 1;
      });

      lists.forEach(function (list) {
        var hasVisible = !!list.querySelector(".student-paper-item:not([hidden])");
        list.hidden = !hasVisible;
      });

      refreshYearHeaders();
      updateFilterButtonState();
      updateStatus(shown, query);
    }

    function renderFilterButtons() {
      var counts = {};
      items.forEach(function (item) {
        var itemStudents = getItemStudents(item);
        itemStudents.forEach(function (sid) {
          counts[sid] = (counts[sid] || 0) + 1;
        });
      });

      var rows = Object.keys(counts).map(function (sid) {
        return { id: sid, name: studentMap[sid] || sid, count: counts[sid] };
      }).sort(function (a, b) {
        if (b.count !== a.count) return b.count - a.count;
        return a.name.localeCompare(b.name);
      });

      var frag = document.createDocumentFragment();

      var reset = document.createElement("button");
      reset.type = "button";
      reset.className = "papers-coauthor-btn is-active";
      reset.setAttribute("data-student-all", "1");
      reset.textContent = "All (" + total + ")";
      reset.addEventListener("click", function () {
        activeStudent = null;
        applyFilter();
      });
      frag.appendChild(reset);

      rows.forEach(function (row) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "papers-coauthor-btn";
        btn.setAttribute("data-student", row.id);
        btn.textContent = row.name + " (" + row.count + ")";
        btn.addEventListener("click", function () {
          activeStudent = (activeStudent === row.id) ? null : row.id;
          applyFilter();
        });
        frag.appendChild(btn);
      });

      filterBox.appendChild(frag);
    }

    input.addEventListener("input", applyFilter);
    renderFilterButtons();
    applyFilter();
  })();
</script>
