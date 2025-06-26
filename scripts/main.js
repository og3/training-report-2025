// about.json 読み込み
fetch('datas/about.json')
    .then(res => res.json())
    .then(data => {
    document.getElementById('about-text').textContent = data.text;
});

// training.json
fetch('datas/training.json')
    .then(res => res.json())
    .then(data => {
    const list = document.getElementById('training-list');
    data.curriculum.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.link;
        a.textContent = item.title;
        a.target = '_blank';
        a.className = 'text-indigo-600 hover:underline';
        li.appendChild(a);
        list.appendChild(li);
    });

    const timeline = document.getElementById('training-timeline');
    data.timeline.forEach(entry => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.className = 'font-bold text-indigo-600';
        span.textContent = entry.date;

        const wrapper = document.createElement('div');
        wrapper.appendChild(span);

        const content = document.createElement('span');
        content.innerHTML = ` : ${entry.event}`;
        wrapper.appendChild(content);

        content.querySelectorAll('a').forEach(link => {
        link.className = 'text-indigo-600 hover:underline';
        });

        li.appendChild(wrapper);
        timeline.appendChild(li);
    });
    });

// works.json
fetch('datas/works.json')
    .then(res => res.json())
    .then(data => {
    const container = document.getElementById('works-list');
    data.forEach(work => {
        const div = document.createElement('div');
        div.className = 'bg-white p-4 rounded shadow';
        div.innerHTML = `
        <h3 class="text-lg font-bold">${work.title}</h3>
        <p class="text-sm text-gray-600 mb-1">${work.description}</p>
        <p class="text-xs text-gray-500">技術: ${work.techs ? work.techs.join(', ') : ''}</p>
        <a href="${work.link}" class="text-indigo-600 text-sm mt-2 inline-block" target="_blank">GitHubを見る</a>
        `;
        container.appendChild(div);
    });
    });

// joblog.json
fetch('datas/joblog.json')
    .then(res => res.json())
    .then(data => {
    const summaryList = document.getElementById('joblog-summary');
    const timelineList = document.getElementById('joblog-list');
    const notesList = document.getElementById('joblog-notes');
    const tbody = document.querySelector('#agent-table tbody');

    if (data.summary) {
        const summaryItems = [data.summary.experience, data.summary.conditions];
        summaryItems.forEach(text => {
        const li = document.createElement('li');
        li.textContent = text;
        summaryList.appendChild(li);
        });
    }

    if (data.timeline) {
        data.timeline.forEach(entry => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.className = 'font-bold text-indigo-600';
        span.textContent = entry.date;

        const wrapper = document.createElement('div');
        wrapper.appendChild(span);

        const content = document.createElement('span');
        content.innerHTML = ` : ${entry.event}`;
        wrapper.appendChild(content);

        li.appendChild(wrapper);
        timelineList.appendChild(li);
        });
    }

    if (data.notes) {
        data.notes.forEach(note => {
        const li = document.createElement('li');
        li.textContent = note;
        notesList.appendChild(li);
        });
    }

    if (data.agents) {
        data.agents.forEach(agent => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td class="px-4 py-2 border">${agent.name}</td>
        <td class="px-4 py-2 border">${agent.features}</td>
        <td class="px-4 py-2 border">${agent.satisfaction}</td>
        <td class="px-4 py-2 border">${agent.notes}</td>
        `;
        tbody.appendChild(row);
    });
    }

    });

