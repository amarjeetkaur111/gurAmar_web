/* Client-side include loader for header and footer
   Inserts includes/header.html into #include-header
   and includes/footer.html into #include-footer
*/
(function(){
  function fetchHtml(path){
    return fetch(path, {cache: 'no-cache'}).then(function(resp){ if(!resp.ok) throw new Error(resp.statusText); return resp.text(); });
  }
  function insert(path, selector){
    fetchHtml(path).then(function(html){
      var container = document.querySelector(selector);
      if(!container) return;
      container.innerHTML = html;
    }).catch(function(err){ console.error('Include failed:', path, err); });
  }
  function run(){
    insert('includes/header.html', '#include-header');
    insert('includes/footer.html', '#include-footer');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
