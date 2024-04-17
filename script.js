main = document.getElementById('main');

open = '| '

aboutmeText = {
    'header': 'about me',
    'content': "full name: 'Phung Anh Tuan' <br> student at PTIT <br> class: D23CQCC02-B <br> student-id: B23DCCC174"
};

projectText = {
    'header': 'project',
    'content': '+ warehouse management website (unfinished): <a href="https://github.com/tuanphung2005/warehouse-management">Github</a> <br> + simple todo list app: <a href="https://github.com/tuanphung2005/todo-list">Github</a> <br> + super simple calculator: <a href="https://github.com/tuanphung2005/RIPT1302-20232-04-B23DCCC174-MidTerm-Exce1">Github</a> <br> + simple countdown clock: <a href="https://github.com/tuanphung2005/RIPT1302-20232-04-B23DCCC174-MidTerm-Exce2">Github</a>'
};

contactText = {
    'header': 'contact me',
    'content': 'Phone number: 0339194829 <br> Email: tuanpa.b23cc174@stu.ptit.edu.vn',
};

experienceText = {
    'header': 'experience',
    'content': '+ web development since 2024 <br> + programming since 2019 <br> + being a human since 2005 <br> + <img src="media/sleepingcat.png" alt="eepycat">'
};

swskillText = {
    'header': 'strengths / weaknesses',
    'content': 'strengths: <br> + good at programming <br> + good at english <br> weaknesses: <br> - bad at communication <br> - bad at teamwork <br> - bad at making friends <br> - bad at socializing <br> - bad at talking <br> - bad at everything else <br>'
}

typing = false;
var timeoutId;

header = document.getElementById('header');
contentElement = document.getElementById('content');
aboutme = document.getElementById('aboutme');
project = document.getElementById('project');
contact = document.getElementById('contact');
swskill = document.getElementById('swskill');

aboutme.addEventListener('click', function () {
    event.preventDefault();
    main.style.visibility = 'visible';
    header.innerHTML = '';
    contentElement.innerHTML = '';

    typeWriter(open + aboutmeText['header'], 'header', function () {
        typeWriter(aboutmeText['content'], 'content');
    });
});

project.addEventListener('click', function () {
    event.preventDefault();
    main.style.visibility = 'visible';
    header.innerHTML = '';
    contentElement.innerHTML = ''; 

    typeWriter(open + projectText['header'], 'header', function () {
        typeWriter(projectText['content'], 'content');
    });
});

contact.addEventListener('click', function () {
    event.preventDefault();
    main.style.visibility = 'visible';
    header.innerHTML = '';
    contentElement.innerHTML = ''; 

    typeWriter(open + contactText['header'], 'header', function () {
        typeWriter(contactText['content'], 'content');
    });
});

experience.addEventListener('click', function () {
    event.preventDefault();
    main.style.visibility = 'visible';
    header.innerHTML = '';
    contentElement.innerHTML = '';

    typeWriter(open + experienceText['header'], 'header', function () {
        typeWriter(experienceText['content'], 'content');
    });

});

swskill.addEventListener('click', function () {
    event.preventDefault();
    main.style.visibility = 'visible';
    header.innerHTML = '';
    contentElement.innerHTML = '';

    typeWriter(open + swskillText['header'], 'header', function () {
        typeWriter(swskillText['content'], 'content');
    });
});


function typeWriter(txt, id, callback) {
    
    if (typing) {
        clearTimeout(timeoutId);
        document.getElementById(id).innerHTML = '';
    }
        var i = 0;
        var speed = 1;
        var html = '';
        function typeWriterInner() {
            if (i < txt.length) {
                html += txt.charAt(i);
                document.getElementById(id).innerHTML += txt.charAt(i);
                i++;
                timeoutId = setTimeout(typeWriterInner, speed);
                typing = true;
            } else {
                document.getElementById(id).innerHTML = html;
                typing = false;
                if (callback) {
                    callback();
                }
            }
        }
        typeWriterInner();
}



console.log('loaded');