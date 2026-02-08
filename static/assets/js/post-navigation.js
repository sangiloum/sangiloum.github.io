document.addEventListener("DOMContentLoaded", function () {
  var navData = window.__POST_NAV_DATA__ || {};
  var currentPostPath = navData.currentPostPath || "";
  var categoryPosts = navData.categoryPosts || {};
  var categoryPages = navData.categoryPages || {};
  var yearPosts = navData.yearPosts || {};
  var yearPages = navData.yearPages || {};

  var breadcrumbYearItem = document.getElementById("breadcrumb-year-item");
  var breadcrumbYearSep = document.getElementById("breadcrumb-year-sep");
  var breadcrumbCategoryLabelItem = document.getElementById("breadcrumb-category-label-item");
  var breadcrumbCategoryLabelSep = document.getElementById("breadcrumb-category-label-sep");
  var breadcrumbCategoryItem = document.getElementById("breadcrumb-category-item");
  var breadcrumbCategoryItemSep = document.getElementById("breadcrumb-category-item-sep");
  var breadcrumbCategoryLink = document.getElementById("breadcrumb-category-link");
  var prevLinks = Array.prototype.slice.call(document.querySelectorAll(".post-nav-prev-link"));
  var nextLinks = Array.prototype.slice.call(document.querySelectorAll(".post-nav-next-link"));
  var backLink = document.getElementById("post-nav-back");
  var upLink = document.getElementById("post-nav-up");

  function showYearBreadcrumb() {
    if (breadcrumbYearItem) breadcrumbYearItem.style.display = "";
    if (breadcrumbYearSep) breadcrumbYearSep.style.display = "";
    if (breadcrumbCategoryLabelItem) breadcrumbCategoryLabelItem.style.display = "none";
    if (breadcrumbCategoryLabelSep) breadcrumbCategoryLabelSep.style.display = "none";
    if (breadcrumbCategoryItem) breadcrumbCategoryItem.style.display = "none";
    if (breadcrumbCategoryItemSep) breadcrumbCategoryItemSep.style.display = "none";
  }

  function showCategoryBreadcrumb(categoryValue, categoryHref) {
    if (breadcrumbYearItem) breadcrumbYearItem.style.display = "none";
    if (breadcrumbYearSep) breadcrumbYearSep.style.display = "none";
    if (breadcrumbCategoryLabelItem) breadcrumbCategoryLabelItem.style.display = "";
    if (breadcrumbCategoryLabelSep) breadcrumbCategoryLabelSep.style.display = "";
    if (breadcrumbCategoryItem) breadcrumbCategoryItem.style.display = "";
    if (breadcrumbCategoryItemSep) breadcrumbCategoryItemSep.style.display = "";
    if (breadcrumbCategoryLink) {
      breadcrumbCategoryLink.href = categoryHref;
      breadcrumbCategoryLink.textContent = categoryValue;
    }
  }

  function normalizePath(path) {
    var value = (path || "");
    value = value.split("?")[0].split("#")[0];
    try {
      value = decodeURIComponent(value);
    } catch (e) {}
    value = value.replace(/\/+$/, "");
    return value === "" ? "/" : value;
  }

  function setLink(link, item, label, queryKey, queryValue) {
    if (!link) return;
    var titleEl = link.querySelector(".post-nav-title");
    var labelEl = link.querySelector(".post-nav-label");
    if (!item) {
      link.classList.add("is-empty");
      link.setAttribute("aria-disabled", "true");
      link.setAttribute("tabindex", "-1");
      link.href = "#";
      if (titleEl) titleEl.textContent = "";
      if (labelEl) labelEl.textContent = "";
      if (!titleEl && !labelEl) link.setAttribute("aria-label", "No " + label.toLowerCase() + " post");
      return;
    }
    var href = item.url;
    if (queryKey && queryValue) {
      href += "?" + queryKey + "=" + encodeURIComponent(queryValue);
    }
    link.href = href;
    link.classList.remove("is-empty");
    link.removeAttribute("aria-disabled");
    link.removeAttribute("tabindex");
    if (titleEl) titleEl.textContent = item.title;
    if (labelEl) labelEl.textContent = label;
    if (!titleEl && !labelEl) link.setAttribute("aria-label", label + ": " + item.title);
  }

  function setBackNavigation(href, text, ariaLabel) {
    if (backLink) {
      backLink.href = href;
      backLink.textContent = text;
    }
    if (upLink) {
      upLink.href = href;
      upLink.setAttribute("aria-label", ariaLabel);
    }
  }

  showYearBreadcrumb();

  var params = new URLSearchParams(window.location.search);
  var activeCategory = (params.get("category") || "").trim().toLowerCase();
  var activeYear = (params.get("year") || "").trim();
  if (!activeCategory && !activeYear) return;

  prevLinks.forEach(function (link) { setLink(link, null, "Previous", "", ""); });
  nextLinks.forEach(function (link) { setLink(link, null, "Next", "", ""); });

  var currentPath = normalizePath(currentPostPath);
  var runtimePath = normalizePath(window.location.pathname);

  if (activeCategory) {
    var categoryItems = categoryPosts[activeCategory];
    if (!categoryItems || !categoryItems.length) {
      if (categoryPages[activeCategory]) {
        setBackNavigation(
          categoryPages[activeCategory],
          '"' + activeCategory + '" category',
          'Back to "' + activeCategory + '" category'
        );
        showCategoryBreadcrumb(activeCategory, categoryPages[activeCategory]);
      }
      return;
    }

    var categoryIndex = categoryItems.findIndex(function (post) {
      var postPath = normalizePath(post.url);
      return postPath === currentPath || postPath === runtimePath;
    });
    if (categoryIndex < 0) {
      if (categoryPages[activeCategory]) {
        setBackNavigation(
          categoryPages[activeCategory],
          '"' + activeCategory + '" category',
          'Back to "' + activeCategory + '" category'
        );
        showCategoryBreadcrumb(activeCategory, categoryPages[activeCategory]);
      }
      return;
    }

    var categoryPrev = categoryIndex < categoryItems.length - 1 ? categoryItems[categoryIndex + 1] : null;
    var categoryNext = categoryIndex > 0 ? categoryItems[categoryIndex - 1] : null;
    prevLinks.forEach(function (link) { setLink(link, categoryPrev, "Previous", "category", activeCategory); });
    nextLinks.forEach(function (link) { setLink(link, categoryNext, "Next", "category", activeCategory); });

    if (categoryPages[activeCategory]) {
      setBackNavigation(
        categoryPages[activeCategory],
        '"' + activeCategory + '" category',
        'Back to "' + activeCategory + '" category'
      );
      showCategoryBreadcrumb(activeCategory, categoryPages[activeCategory]);
    }
    return;
  }

  var yearItems = yearPosts[activeYear];
  if (!yearItems || !yearItems.length) {
    if (yearPages[activeYear]) {
      setBackNavigation(
        yearPages[activeYear],
        activeYear + " archive",
        "Back to " + activeYear + " archive"
      );
    }
    return;
  }

  var yearIndex = yearItems.findIndex(function (post) {
    var postPath = normalizePath(post.url);
    return postPath === currentPath || postPath === runtimePath;
  });
  if (yearIndex < 0) {
    if (yearPages[activeYear]) {
      setBackNavigation(
        yearPages[activeYear],
        activeYear + " archive",
        "Back to " + activeYear + " archive"
      );
    }
    return;
  }

  var yearPrev = yearIndex < yearItems.length - 1 ? yearItems[yearIndex + 1] : null;
  var yearNext = yearIndex > 0 ? yearItems[yearIndex - 1] : null;
  prevLinks.forEach(function (link) { setLink(link, yearPrev, "Previous", "year", activeYear); });
  nextLinks.forEach(function (link) { setLink(link, yearNext, "Next", "year", activeYear); });
  if (yearPages[activeYear]) {
    setBackNavigation(
      yearPages[activeYear],
      activeYear + " archive",
      "Back to " + activeYear + " archive"
    );
    showYearBreadcrumb();
  }
});
