let tabButtons = document.querySelectorAll('.icon a');
      let tabPanels = document.querySelectorAll('.product-container .products');

      function showPanel(panelIndex){
          tabPanels.forEach(function(node){
              node.style.display="none";
          });
          tabPanels[panelIndex].style.display="block";
    }
showPanel(0);
