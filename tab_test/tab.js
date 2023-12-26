(() => {

    class Accordion {
        //初期化
        constructor(obj){

            const $elm = document.querySelector(obj.hookName);
            const $trigger = $elm.getElementsByTagName(obj.tagName);
        
            const tiggerLen = $trigger.length;
            let index = 0;
            while (index < tiggerLen){
                $trigger[index].addEventListener('click', (e) => this.clickHandler(e));
                index++;
            }
        }

         clickHandler (e) {
            e.preventDefault();
    
            const $target = e.currentTarget;
            
            const $content = $target.nextElementSibling;
    
            if($content.style.display === "block"){
                $content.style.display = 'none';
            } else {
                $content.style.display = 'block';
            }
        };
    }

    const fuckinAccordion = new Accordion({
        hookName: '#js-faq',
        tagName: 'p'
    });

    const dummyAccordion = new Accordion({
        hookName: '#js-tab',
        tagName: 'p'
    });
   
    
    
})();