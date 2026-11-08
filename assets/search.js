// 自动搜索：搜标题 + 摘要里的词，不用手动打标签、不用分类。
// 分类按钮 + 搜索框一起过滤首页卡片。
(function(){
  var q=document.getElementById('q'); if(!q) return;
  var cards=Array.prototype.slice.call(document.querySelectorAll('#list .card'));
  var empty=document.getElementById('empty');
  var cat='全部';
  function apply(){
    var kw=(q.value||'').trim();
    var shown=0;
    cards.forEach(function(c){
      var okCat = cat==='全部' || c.getAttribute('data-cat')===cat;
      var okKw = !kw || (c.getAttribute('data-text')||'').indexOf(kw)!==-1;
      var show = okCat && okKw;
      c.style.display = show ? '' : 'none';
      if(show) shown++;
    });
    if(empty) empty.style.display = shown ? 'none' : '';
  }
  q.addEventListener('input', apply);
  document.querySelectorAll('.pill').forEach(function(b){
    b.addEventListener('click', function(){
      document.querySelectorAll('.pill').forEach(function(x){x.classList.remove('active')});
      b.classList.add('active'); cat=b.getAttribute('data-cat'); apply();
    });
  });
})();
