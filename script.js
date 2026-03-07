const equipmentData = [
    {
        id: "chaji-qiaogun",
        name: "查缉撬棍",
        subtitle: "传统车辆查缉装备",
        summary: "采用高强度钢制结构，具备撬、拨、顶、压等多种功能，是一线执勤执法的重要基础装备。",
        model: "BREACH-01",
        status: "常规配发",
        accent: "#67ebff",
        accent2: "#ffb347",
        imageFiles: ["chaji-qiaogun-1.jpg", "chaji-qiaogun-2.jpg"],
        imageHint: "占位图建议后续替换为现场实拍或器材棚拍图。",
        tags: ["破拆", "封闭空间", "强制开拆"],
        metrics: [
            { value: "多功能", label: "兼具撬、拨、顶、压等多种功能，适配多类现场处置需求" },
            { value: "深检查", label: "配合其他装备完成对藏匿点的深度检查，确保不漏检、不遗留" },
            { value: "基础型", label: "作为传统查缉装备，支撑日常交通运输工具边防检查全流程作业" }
        ],
        features: [
            "采用高强度钢制结构，具备撬、拨、顶、压等多种功能。",
            "可对车辆封闭部位、货物包装、可疑箱体及封堵结构进行强制开启和缝隙扩张。",
            "可撬动固定物，并配合其他装备完成对藏匿点的深度检查。"
        ],
        scenes: [
            "口岸车辆与货物查验。",
            "封闭箱体拆解。",
            "可疑包裹开启。"
        ],
        notes: [
            "优先用于封闭部位和可疑结构的初步处置。",
            "与照明、内窥、记录等装备协同使用效果更佳。",
            "使用后检查受力部位和工具磨损情况。"
        ],
        value: [
            "支撑对封闭结构和可疑部位的快速处置。",
            "为后续深度检查打开作业入口。",
            "夯实传统人工查验的基础保障能力。"
        ],
        references: [
            { label: "Stanley pry bar 类工具参考", url: "https://www.stanleytools.com/" }
        ]
    },
    {
        id: "chaji-tongtiao",
        name: "查缉通条",
        subtitle: "传统车辆查缉装备",
        summary: "主要用于狭长、隐蔽空间和堆装大体积货物的深层插探、拨查和搅动，帮助直观感知和排查藏匿风险。",
        model: "PROBE-07",
        status: "高频使用",
        accent: "#55f0ff",
        accent2: "#3ddc97",
        imageFiles: ["chaji-tongtiao-1.jpg", "chaji-tongtiao-2.jpg"],
        tags: ["插探", "缝隙", "抽检"],
        metrics: [
            { value: "隐蔽点", label: "面向排气管、座椅缝隙、备胎仓等狭长隐蔽空间开展探查" },
            { value: "大货量", label: "适用于木炭、沙石等堆装大体积货物的深层拨查" },
            { value: "直感知", label: "依靠直观感知排查违禁品、可疑物品和伪装夹层、暗格" }
        ],
        features: [
            "主要用于车辆排气管、座椅缝隙、备胎仓等狭长、隐蔽空间检查。",
            "可对木炭、沙石等堆装大体积货物进行深层插探、拨查和搅动。",
            "能够帮助发现伪装夹层、暗格及其他藏匿风险点。"
        ],
        scenes: [
            "通道车辆临检。",
            "货运车辆普查。",
            "货运车辆抽查。"
        ],
        notes: [
            "适合作为人工查验中的延伸触达工具。",
            "对异常阻尼或触感点位应及时标记复查。",
            "使用后注意清洁和检查杆体状态。"
        ],
        value: [
            "强化对狭长、隐蔽空间的人工探查能力。",
            "提高对伪装夹层、暗格的发现概率。",
            "提升货运车辆普查、抽查的查验深度。"
        ],
        references: [
            { label: "通用工业探针器械参考", url: "https://www.mcmaster.com/probes/" }
        ]
    },
    {
        id: "chaji-gongjuxiang",
        name: "查缉工具箱",
        subtitle: "传统车辆查缉装备",
        summary: "集成多类实用工具，满足车辆部件拆解、应急破拆、现场固定和基础维修等需求。",
        model: "KIT-09",
        status: "机动保障",
        accent: "#67ebff",
        accent2: "#ffd166",
        imageFiles: ["chaji-gongjuxiang-1.jpg", "chaji-gongjuxiang-2.jpg"],
        imageHint: "当前为工业工具箱示意图，适合后续换成真实套装摆拍图。",
        tags: ["集成", "维护", "应急"],
        metrics: [
            { value: "工具集", label: "集成螺丝刀、扳手、强光手电、测量尺、约束器材等实用工具" },
            { value: "现场型", label: "满足现场拆解、固定、应急破拆和基础维修等任务需求" },
            { value: "支撑型", label: "作为基础保障装备，支撑日常查缉作业稳定开展" }
        ],
        features: [
            "集成螺丝刀、扳手、强光手电、测量尺、约束器材等实用工具。",
            "满足车辆部件拆解、应急破拆、现场固定、基础维修等需求。",
            "为复杂查验现场提供稳定的工具保障。"
        ],
        scenes: [
            "可疑改装车核查。",
            "复杂部位拆解查验。"
        ],
        notes: [
            "适合在复杂部位拆解和现场固定时集中调用。",
            "任务后应及时清点和归位。",
            "保持箱内工具分类清晰，便于快速取用。"
        ],
        value: [
            "为复杂查验任务提供稳定的工具保障。",
            "提升现场拆解、固定和应急处置效率。",
            "支撑一线执勤执法的连续作业能力。"
        ],
        references: [
            { label: "工业工具箱图像参考", url: "https://www.pexels.com/search/toolbox/" }
        ]
    },
    {
        id: "shouchi-beisanse-jianceyi",
        name: "手持背散射检测仪",
        subtitle: "新锐智能查缉装备",
        summary: "采用 X 射线背散射成像技术，实现单侧非接触扫描和实时成像，适用于重点车辆无损检测。",
        model: "SCAN-XR",
        status: "重点装备",
        accent: "#77f5ff",
        accent2: "#3ddc97",
        imageFiles: ["shouchi-beisanse-jianceyi-1.jpg", "shouchi-beisanse-jianceyi-2.jpg"],
        imageHint: "当前为便携检测设备类示意图，建议后续换成真实仪器图。",
        tags: ["成像", "无损检查", "便携"],
        metrics: [
            { value: "背散射", label: "采用 X 射线背散射成像技术，对隐蔽夹层进行快速识别" },
            { value: "实时化", label: "单侧非接触扫描、实时成像，提高查验效率和安全性" },
            { value: "高识别", label: "可清晰显示毒品、爆炸物、管制器具等违禁物品" }
        ],
        features: [
            "采用 X 射线背散射成像技术，可进行单侧非接触扫描。",
            "可穿透车体夹层、门板、轮胎、内饰等结构实现实时成像。",
            "能够清晰显示毒品、爆炸物、管制器具等违禁物品。"
        ],
        scenes: [
            "车辆隐蔽夹层排查。",
            "重点车辆无损检测。"
        ],
        notes: [
            "适用于非接触、无死角、快识别查验任务。",
            "应严格执行设备安全操作要求。",
            "对异常影像结果应及时固定和复核。"
        ],
        value: [
            "显著提升重点车辆无损检测能力。",
            "减少大面积破拆带来的作业成本和干扰。",
            "增强对隐蔽夹层违禁物品的快速识别能力。"
        ],
        references: [
            { label: "手持背散射检测设备参考", url: "https://www.rapiscansystems.com/en/products/miniz" }
        ]
    },
    {
        id: "sixiang-neikuijing",
        name: "四项内窥镜",
        subtitle: "新锐智能查缉装备",
        summary: "采用多探头、柔性管线和高清成像方案，可深入人工无法触及的狭小空间开展可视化探查和固定证据。",
        model: "V-SCOPE 4D",
        status: "精查装备",
        accent: "#67ebff",
        accent2: "#9dff8d",
        imageFiles: ["sixiang-neikuijing-1.jpg", "sixiang-neikuijing-2.jpg"],
        imageHint: "当前为工业精密设备示意图，适合后续换成内窥镜实拍图。",
        tags: ["内窥", "可视化", "取证"],
        metrics: [
            { value: "多探头", label: "多探头设计提升狭小空间探查覆盖面" },
            { value: "高清化", label: "高清成像并支持拍照录像固定证据" },
            { value: "深可达", label: "可深入发动机舱、仪表台内部、车门腔体和空调风道" }
        ],
        features: [
            "多探头、柔性管线设计，适应人工难以触及的狭小空间。",
            "依托高清成像实现可视化探查。",
            "支持拍照和录像，便于固定证据。"
        ],
        scenes: [
            "车辆暗格排查。",
            "非法改装藏匿检查。",
            "狭小腔体深度查验。"
        ],
        notes: [
            "适合承担狭小腔体的深度可视化查验任务。",
            "关键画面应及时拍照录像留存。",
            "使用后清洁镜头、探头和线缆。"
        ],
        value: [
            "填补人工无法触及空间的可视化检查盲区。",
            "提升对非法改装和隐蔽藏匿的取证能力。",
            "为深度查验提供直观证据支撑。"
        ],
        references: [
            { label: "工业 videoscope 参考", url: "https://www.olympus-ims.com/en/industrial-videoscope/" }
        ]
    },
    {
        id: "chedi-jiance-jiqiren",
        name: "车底检测机器人",
        subtitle: "新锐智能查缉装备",
        summary: "遥控全向移动，搭载高清摄像头与扫描模块，可自动完成车底全景扫描成像并智能识别异常装置。",
        model: "UV-ROBOT",
        status: "高价值装备",
        accent: "#67ebff",
        accent2: "#ff8f70",
        imageFiles: ["chedi-jiance-jiqiren-1.jpg", "chedi-jiance-jiqiren-2.jpg"],
        imageHint: "当前为机器人设备示意图，建议后续替换为车底机器人实景图。",
        tags: ["机器人", "车底", "扫描"],
        metrics: [
            { value: "遥控化", label: "遥控全向移动，替代人工俯身、钻底检查" },
            { value: "全景化", label: "自动完成车底全景扫描成像，提高普查和抽查效率" },
            { value: "智能化", label: "智能识别非法改装、夹带和悬挂可疑装置" }
        ],
        features: [
            "遥控全向移动，适应车底复杂检查环境。",
            "搭载高清摄像头与扫描模块，自动完成车底全景扫描成像。",
            "可智能识别非法改装、夹带、悬挂可疑装置。"
        ],
        scenes: [
            "口岸通道车辆车底普查、抽查。",
            "重点车辆安检。",
            "高风险车辆排查。"
        ],
        notes: [
            "适合高流量通道的连续检查任务。",
            "扫描结果应及时归档并转人工确认。",
            "使用前检查设备行走和图像采集状态。"
        ],
        value: [
            "替代人工俯身、钻底检查，降低执勤风险。",
            "提升车底普查、抽查的效率和覆盖面。",
            "增强对高风险车辆异常装置的发现能力。"
        ],
        references: [
            { label: "Under vehicle inspection 设备参考", url: "https://www.zkteco.com/en/product/uvss" }
        ]
    },
    {
        id: "bianxieshi-dupin-baozha-jianceyi",
        name: "便携式毒品爆炸检测仪",
        subtitle: "新锐智能查缉装备",
        summary: "采用先进检测技术开展痕量检测和快速识别，通过擦拭取样即可精准判定毒品与爆炸物种类。",
        model: "TRACE-EX",
        status: "专用检测",
        accent: "#67ebff",
        accent2: "#ffd166",
        imageFiles: ["bianxieshi-dupin-baozha-jianceyi-1.jpg", "bianxieshi-dupin-baozha-jianceyi-2.jpg"],
        imageHint: "当前为检测设备类示意图，建议后续换成真实仪器或操作场景图。",
        tags: ["痕量检测", "快速", "筛查"],
        metrics: [
            { value: "痕量型", label: "痕量检测、快速识别，适合口岸现场初筛" },
            { value: "报警型", label: "支持声光报警，反馈直观、响应迅速" },
            { value: "精准型", label: "通过擦拭取样即可精准判定毒品与爆炸物种类" }
        ],
        features: [
            "采用先进检测技术，实现痕量检测与快速识别。",
            "通过擦拭取样即可开展检测并判定毒品与爆炸物种类。",
            "具备声光报警功能，灵敏度高、响应迅速。"
        ],
        scenes: [
            "口岸现场快速初筛。",
            "车辆及随身物品检测。",
            "缉毒缉私、搜爆安检。"
        ],
        notes: [
            "适合作为现场快识别和快速分流装备使用。",
            "采样时优先覆盖可疑接触面和重点点位。",
            "报警结果应结合复测和后续处置流程综合研判。"
        ],
        value: [
            "提升口岸现场快速初筛和风险分流能力。",
            "增强对毒品、爆炸物痕量残留的识别效率。",
            "为缉毒缉私、搜爆安检提供技术支撑。"
        ],
        references: [
            { label: "便携痕量检测设备参考", url: "https://www.smithsdetection.com/products/ionscan-600/" }
        ]
    }
];

function byId(id) {
    return equipmentData.find((item) => item.id === id);
}

function createTags(tags) {
    return tags.map((tag) => `<span>${tag}</span>`).join("");
}

function createMetrics(metrics) {
    return metrics.map((item) => `
        <article class="metric-card">
            <span>关键要点</span>
            <strong>${item.value}</strong>
            <small class="metric-label">${item.label}</small>
        </article>
    `).join("");
}

function createList(items) {
    return items.map((item) => `<li>${item}</li>`).join("");
}

function createReferences(references) {
    return references.map((item) => `
        <li><a href="${item.url}" target="_blank" rel="noreferrer">${item.label}</a></li>
    `).join("");
}

function applyTheme(item) {
    document.documentElement.style.setProperty("--accent", item.accent);
    document.documentElement.style.setProperty("--accent-3", item.accent2);
}

function getAssetPrefix() {
    return document.body.dataset.page === "detail" ? "../../image/" : "image/";
}

function getImagePath(fileName) {
    return `${getAssetPrefix()}${fileName}`;
}

function renderHome() {
    const grid = document.getElementById("equipment-grid");
    if (!grid) {
        return;
    }

    grid.innerHTML = equipmentData.map((item, index) => `
        <a class="equipment-card" href="equip/${item.id}/index.html" style="--delay:${index * 0.08}s">
            <img src="${getImagePath(item.imageFiles[0])}" alt="${item.name}">
            <div class="equipment-card-body">
                <span class="small-label">${item.model}</span>
                <h3>${item.name}</h3>
                <p>${item.summary}</p>
                <div class="tag-row">${createTags(item.tags)}</div>
                <div class="card-footer">
                    <span>${item.subtitle}</span>
                    <span>查看介绍</span>
                </div>
            </div>
        </a>
    `).join("");

    const params = new URLSearchParams(window.location.search);
    const equipmentId = params.get("equipment");
    if (equipmentId && byId(equipmentId)) {
        window.location.href = `equip/${encodeURIComponent(equipmentId)}/index.html`;
    }
}

function renderDetail() {
    const equipmentId = document.body.dataset.equipmentId;
    const item = byId(equipmentId);
    if (!item) {
        return;
    }

    applyTheme(item);
    document.title = `${item.name} - 装备数字展厅`;

    document.getElementById("detail-title").textContent = item.name;
    document.getElementById("detail-subtitle").textContent = item.subtitle;
    document.getElementById("detail-summary").textContent = item.summary;
    document.getElementById("detail-model").textContent = item.model;
    document.getElementById("detail-status").textContent = item.status;
    document.getElementById("detail-image").src = getImagePath(item.imageFiles[0]);
    document.getElementById("detail-image").alt = item.name;
    document.getElementById("detail-image-hint").textContent = item.imageHint;
    document.getElementById("detail-showcase-primary").src = getImagePath(item.imageFiles[0]);
    document.getElementById("detail-showcase-primary").alt = `${item.name}主展示图`;
    document.getElementById("detail-showcase-secondary").src = getImagePath(item.imageFiles[1] || item.imageFiles[0]);
    document.getElementById("detail-showcase-secondary").alt = `${item.name}补充展示图`;
    document.getElementById("detail-showcase-caption").textContent = item.imageHint;
    document.getElementById("detail-tags").innerHTML = item.tags.map((tag) => `<span class="detail-chip">${tag}</span>`).join("");
    document.getElementById("detail-metrics").innerHTML = createMetrics(item.metrics);
    document.getElementById("detail-features").innerHTML = createList(item.features);
    document.getElementById("detail-scenes").innerHTML = createList(item.scenes);
    document.getElementById("detail-notes").innerHTML = createList(item.value);
    document.getElementById("detail-references").innerHTML = createReferences(item.references);
}

document.addEventListener("DOMContentLoaded", () => {
    const pageType = document.body.dataset.page;
    if (pageType === "home") {
        renderHome();
    }
    if (pageType === "detail") {
        renderDetail();
    }
});

