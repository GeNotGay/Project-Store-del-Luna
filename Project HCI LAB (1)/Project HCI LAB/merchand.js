let indicator = document.querySelector('.indicator').children;
let item = document.querySelector('.items').children;

for(let i=0;i<indicator.length;i++){
    indicator[i].onclick = function(){
        for(let j=0;j<indicator.length;j++){
            indicator[j].classList.remove('active');
        }
        this.classList.add('active');
        const displayItem = this.getAttribute('filters');
        for(let k=0;k<item.length;k++){
            item[k].getElementsByClassName.transform = 'scale(0)';
            setTimeout(()=>{
                item[k].style.display = 'none';
            }, 500);

            if (item[k].getAttribute('data-category') == displayItem) ||displayItem == 'all')
            {
                item[k].style.trans
            }
        }
    }
}
