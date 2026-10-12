// Lọc card combo theo data-tags (chỉ dùng cho bản HTML duyệt; bản Next.js sẽ lọc theo query string)
document.querySelectorAll('.lc-filters').forEach(function (group) {
  group.addEventListener('click', function (e) {
    var btn = e.target.closest('button[data-filter]'); if (!btn) return;
    group.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
    var f = btn.dataset.filter;
    document.querySelectorAll('.lc-card').forEach(function (c) {
      c.hidden = !(f === 'all' || (c.dataset.tags || '').split(' ').indexOf(f) > -1);
    });
  });
});
