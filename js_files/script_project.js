// with the help of GPT3.5 to revise
// const blurElements = document.querySelectorAll('.blur');
// const container = document.querySelector('.container');

// blurElements.forEach((element, index) => {
//     element.addEventListener('mouseenter', () => {

//         scrollToElement(element);
//     });
// });

// function scrollToElement(element) {
//     const rect = element.getBoundingClientRect();
//     const containerRect = container.getBoundingClientRect();
    
//     const targetPosition = element.offsetTop - containerRect.top - containerRect.height / 2 + rect.height / 2;
    
//     let currentPosition = container.scrollTop;
//     const distance = targetPosition - currentPosition;  
//     const duration = 500;  
//     const steps = 100;  
//     const stepTime = duration / steps;  

//     let step = 0;
//     const interval = setInterval(() => {
//         step++;
//         const progress = step / steps;  
//         const currentScroll = currentPosition + (distance * progress);  
        

//         container.scrollTo({
//             top: currentScroll,
//             behavior: 'auto' 
//         });
//         if (step >= steps) {
//             clearInterval(interval);
//         }
//     }, stepTime); 

//     blurElements.forEach(el => {
//         if (el === element) {
//             el.classList.add('focus');
//         } else {
//             el.classList.remove('focus');
//         }
//     });
// }
const container = document.querySelector('.container');
const blurItems = document.querySelectorAll('.blur');

container.addEventListener('scroll', () => {
    let containerScrollTop = container.scrollTop; // 滚动距离
    let containerHeight = container.clientHeight; // 容器高度

    blurItems.forEach((item, index) => {
        let itemOffsetTop = item.offsetTop; // 每个项目相对容器顶部的距离
        let itemHeight = item.offsetHeight; // 每个项目的高度

        // 判断是否为当前视图中最居中的项目
        if (
            itemOffsetTop < containerScrollTop + containerHeight / 2 &&
            itemOffsetTop + itemHeight > containerScrollTop + containerHeight / 2
        ) {
            item.classList.add('focus'); // 添加聚焦样式
        } else {
            item.classList.remove('focus'); // 移除聚焦样式
        }
    });
});


//go to project subpages
document.getElementById("interactive_design").addEventListener("click", function() {
    window.location.href = "Project_InteractiveDesign.html";
});

document.getElementById("3D").addEventListener("click", function() {
    window.location.href = "Project_3D.html";
});
document.getElementById("Nanjing").addEventListener("click", function() {
    window.location.href = "Project_Nanjing.html";
});
document.getElementById("Ocean").addEventListener("click", function() {
    window.location.href = "Project_Ocean.html";
});
document.getElementById("Chang").addEventListener("click", function() {
    window.location.href = "Project_Chang.html";
});
document.getElementById("Discursive").addEventListener("click", function() {
    window.location.href = "Project_Discursive.html";
});
document.getElementById("HXZ").addEventListener("click", function() {
    window.location.href = "Project_HXZ.html";
});
// document.getElementById("UI").addEventListener("click", function() {
//     window.location.href = "Project_UI.html";
// });
document.getElementById("D").addEventListener("click", function() {
    window.location.href = "Project_D.html";
});
