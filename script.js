const equipmentData = [
    {
        id: "dn-vmw-weizhen-shengming-tance",
        name: "无线微震生命探测车辆检查系统",
        subtitle: "新锐装备",
        summary: "DN-VMW 无线微震生命探测车辆检查系统，是一套面向通道车辆防逃逸检查的生命探测装备，可通过吸附于车底的无线微震传感器感知车内藏匿人员活动，在不开门、不卸货条件下快速完成排查。",
        model: "DN-VMW",
        status: "生命探测",
        accent: "#67ebff",
        accent2: "#9dff8d",
        imageFiles: ["无线微震探测仪-optimized.jpg", "生命探测仪1.jpg"],
        imageHint: "主图展示设备整机，辅图用于补充生命探测仪的实际布设与作业场景。",
        tags: ["生命探测", "车底传感", "防逃逸"],
        metrics: [
            { value: "≤30s", label: "单次检测时间短，适合通道车辆快速核查" },
            { value: "≥100m", label: "工业级无线射频传输，保障现场部署灵活性" },
            { value: "双车检", label: "可增加传感器，实现同时检测两台车辆" }
        ],
        features: [
            "可针对客车、柜式和箱式货车等车型开展不开门、不卸货检测。",
            "无线射频连接，直接吸附车底，省去繁琐布线，安装便捷。",
            "支持扩展车底扫描、车牌识别、身份识别等传感器并外接显示。",
            "软件界面、指示灯和语音可同步提示检测结果，并提醒收回传感器。"
        ],
        scenes: [
            "公路口岸通道车辆藏匿人员排查。",
            "货运车辆不开门、不卸货快速检查。",
            "重点车辆防逃逸专项检测。"
        ],
        value: [
            "提升对车辆内部藏匿人员的非接触式发现能力。",
            "兼顾通行效率与查验强度，减少开门卸货带来的时间损耗。",
            "为口岸通道车辆防逃逸检测提供稳定技术支撑。"
        ],
        references: [
            { label: "设备说明文档", url: "#" }
        ]
    },
    {
        id: "sc-sj2000m-wurenji-guanzhi",
        name: "便携式无人机管制设备",
        subtitle: "新锐装备",
        summary: "便携式无人机管制设备，也就是现场常说的“反制枪”，集侦测、干扰和显控于一体，可对入侵无人机实施定向压制，迫使目标悬停、返航或驱离，保障重点区域低空安全。",
        model: "SC-SJ2000M",
        status: "低空防控",
        accent: "#67ebff",
        accent2: "#ff8f70",
        imageFiles: ["携式无人机管制设备1-optimized.jpg", "携式无人机管制设备2-optimized.jpg"],
        imageHint: "当前图片用于展示手持式无人机管制设备外观，后续可补充现场反制应用图。",
        tags: ["无人机反制", "侦打一体", "低空防控"],
        metrics: [
            { value: "0.3-6GHz", label: "覆盖无人机数传、遥控及 WIFI 体制相关频段" },
            { value: "≥3km", label: "空旷环境下具备远距离无线电侦测能力" },
            { value: "≤7kg", label: "设备轻量便携，支持手持式和背负式应用" }
        ],
        features: [
            "集无线电侦测、压制干扰和触控显控于一体，支持侦打一体应用。",
            "可识别绝大多数消费级无人机、WIFI 类玩具机、部分固定翼无人机及穿越机。",
            "具备 300MHz-6GHz 全频段干扰能力，可迫使无人机悬停、返航和驱离。",
            "触控屏可显示无人机型号、方位、参考距离、目标画面等信息，并支持系统设置。"
        ],
        scenes: [
            "重点区域低空防控和预警处置。",
            "口岸周边无人机入侵拦截。",
            "重大安保任务中的无人机管制。"
        ],
        value: [
            "提升对低空无人机目标的事前预警和快速处置能力。",
            "补强边检现场对新型飞行器干扰、驱离和取证的技术手段。",
            "支持多台设备自组网并接入后端平台，增强协同处置能力。"
        ],
        references: [
            { label: "设备说明文档", url: "#" }
        ]
    },
    {
        id: "chedi-jiance-jiqiren",
        name: "车底检查机器人",
        subtitle: "新锐装备",
        summary: "车底检查机器人是一套可快速部署的智能车底查验装备，集车牌识别、车底扫描和全景视频侦查于一体，能够自动完成车底成像和异常排查，适合通道车辆快速查验。",
        model: "UV-ROBOT",
        status: "车底查验",
        accent: "#67ebff",
        accent2: "#ff8f70",
        imageFiles: ["车底检查机器人主图.png", "车底检查机器人1-optimized.jpg"],
        imageHint: "主图展示机器人整机，辅图用于补充车底查验设备外观与通道应用感受。",
        tags: ["车底扫描", "智能查验", "快速部署"],
        metrics: [
            { value: "一键查验", label: "可自动完成车牌识别、路径规划、补光和车底成像" },
            { value: "轻便型", label: "设备轻便小巧、机动便携，适合复杂场景快速部署" },
            { value: "全景化", label: "集成车底扫描与全景视频侦查能力" }
        ],
        features: [
            "集成车牌识别、车底扫描、全景视频侦查、一键查验与返航能力。",
            "支持自动完成车轮对中、路径规划、车底补光和车底成像。",
            "适用于复杂或狭窄车底环境下的智能查验任务。"
        ],
        scenes: [
            "海关与边境管理车辆查验。",
            "公安卡口重点车辆查验。",
            "大型活动和重要会议周边安保。"
        ],
        value: [
            "提升复杂或狭窄环境下车底查验效率。",
            "减少人工俯身检查带来的风险与强度。",
            "增强车辆底部异常结构与可疑藏匿物发现能力。"
        ],
        references: [
            { label: "设备说明文档", url: "#" }
        ]
    },
    {
        id: "bianxieshi-dupin-baozha-jianceyi",
        name: "爆炸物毒品安全检查设备",
        subtitle: "新锐装备",
        summary: "爆炸物毒品安全检查设备是一套基于离子迁移谱原理的台式痕量检测装备，可对爆炸物和毒品等违禁品进行快速识别，并通过声光报警提示检测结果，适用于现场初筛和复核。",
        model: "TR2000DB",
        status: "痕量检测",
        accent: "#67ebff",
        accent2: "#ffd166",
        imageFiles: ["爆炸物毒品安全检查设备主图-optimized.jpg", "爆炸物毒品安全检查设备1.png"],
        imageHint: "主图展示台式检查设备，辅图用于补充安全检查设备的结构与操作状态。",
        tags: ["离子迁移谱", "痕量检测", "双模式"],
        metrics: [
            { value: "双模式", label: "可同时检测常见爆炸物和毒品等违禁品" },
            { value: "快分析", label: "可快速分析物质种类，并给出可信度结果" },
            { value: "大屏显", label: "采用 TFT 触摸液晶屏，检查结论直观" }
        ],
        features: [
            "基于离子迁移谱原理，对痕量物质具有较高灵敏度和物质分辨能力。",
            "支持毒品模式、爆炸物模式或双模式配置，并具备声光报警。",
            "支持用户分级登录、标准物质库更新、数据导出备份和设备集成。",
            "内置打印机与大屏触控界面，便于现场操作和结果留存。"
        ],
        scenes: [
            "口岸现场痕量爆炸物检测。",
            "口岸现场毒品初筛与复核。",
            "安检场所违禁品快速识别。"
        ],
        value: [
            "提升对爆炸物和毒品痕量残留的快速识别能力。",
            "为现场检查结论提供更直观的技术支撑。",
            "支持数据留存、导出与后续综合研判。"
        ],
        references: [
            { label: "设备说明文档", url: "#" }
        ]
    },
    {
        id: "shouchi-beisanse-jianceyi",
        name: "手持背散射检查仪",
        subtitle: "新锐装备",
        summary: "手持背散射检查仪是一款便携式成像扫描装备，可透过钢、铝、混凝土等表面快速发现隐藏的毒品、炸药和走私品，适用于车辆、包裹和可疑结构的无损检查。",
        model: "PX1",
        status: "手持成像",
        accent: "#77f5ff",
        accent2: "#3ddc97",
        imageFiles: ["手持背散射检查仪主图.png", "手持背散射检查仪操作图1.png", "手持背散射检查仪操作图2.png", "手持背散射检查仪操作图3.png"],
        imageHint: "主图展示手持背散射检查仪整机，其余图片用于补充现场操作状态。",
        tags: ["背散射", "手持成像", "违禁品识别"],
        metrics: [
            { value: "强穿透", label: "可透过钢、铝、混凝土等表面发现隐藏违禁品" },
            { value: "实时像", label: "无需背景板和 PDA 等外设，扫描过程实时成像" },
            { value: "多场景", label: "适用于车辆、船舶、飞机、包裹和墙体检查" }
        ],
        features: [
            "手持式一体化设计，安装电池、开启电源即可使用。",
            "可透过多类表面材料发现隐藏的毒品、炸药、走私品等违禁品。",
            "图像清晰直观，可拓宽工作人员视野并提升现场查缉效率。",
            "支持与手机实时互联，便于现场快速判读。"
        ],
        scenes: [
            "公安和边防缉毒车辆检查。",
            "边防检查站嫌疑车辆和行李包裹筛查。",
            "反恐安保、海事缉查和交通枢纽应急检查。"
        ],
        value: [
            "提升对隐蔽违禁品的无损快速发现能力。",
            "减少常规拆检对现场效率的影响。",
            "增强复杂表面和封闭结构的可视化查验能力。"
        ],
        references: [
            { label: "设备说明文档", url: "#" }
        ]
    },
    {
        id: "sixiang-neikuijing",
        name: "四向内窥镜",
        subtitle: "新锐装备",
        summary: "四向内窥镜是一款用于狭小密闭空间可视化探查的精密设备，可无损查看车辆油箱、水箱、排气管等视线不可达部位，帮助发现异物和异常结构。",
        model: "4-WAY SCOPE",
        status: "腔体探查",
        accent: "#67ebff",
        accent2: "#9dff8d",
        imageFiles: ["四向内窥镜主图.png", "四向内窥镜主图.png"],
        imageHint: "当前图片用于展示四向内窥镜外观，后续可补充车辆腔体探查实拍图。",
        tags: ["四向探查", "密闭空间", "无损检查"],
        metrics: [
            { value: "无损查", label: "可无伤呈现密闭空间内物体表面状况" },
            { value: "视线外", label: "适用于车辆邮箱、水箱、排气管等视线不可达位置" },
            { value: "异物判", label: "可辅助判断异物和规格尺寸是否正常" }
        ],
        features: [
            "设计精密、技术先进，适合密闭空间内部状态检查。",
            "能够清晰呈现被检部位表面状况并辅助判断异物。",
            "常用于检查车辆邮箱、水箱、排气管等视线不可达区域。"
        ],
        scenes: [
            "车辆邮箱内部检查。",
            "车辆水箱与排气管探查。",
            "封闭腔体异物和异常结构排查。"
        ],
        value: [
            "补足人工视线不可达部位的检查盲区。",
            "降低对封闭结构进行破拆检查的必要性。",
            "增强密闭空间异常结构和异物发现能力。"
        ],
        references: [
            { label: "设备说明文档", url: "#" }
        ]
    },
    {
        id: "chedi-jiancha-shipinyi",
        name: "车底检查视频仪",
        subtitle: "新锐装备",
        summary: "车底检查视频仪是一款便携式可视化探查装备，主要用于车辆底部安全排查，可通过红外夜视高清摄像头和电动调节镜头发现车底可疑物、危险物和异常改动。",
        model: "UVI-VIDEO",
        status: "视频查验",
        accent: "#67ebff",
        accent2: "#7fe7ff",
        imageFiles: ["车底检查视频仪主图.png", "车底检查视频仪1.png"],
        imageHint: "主图展示车底检查视频仪整机，辅图用于补充视频探查设备的结构细节。",
        tags: ["车底视频", "红外夜视", "可视化检查"],
        metrics: [
            { value: "355°", label: "镜头支持 355° 电动调节，便于车底多角度排查" },
            { value: "7寸屏", label: "配备 7 寸高清显示屏，便于现场观察判读" },
            { value: "折叠式", label: "两段折叠式铝合金机身，移动方便、操作省力" }
        ],
        features: [
            "核心用于车辆底部安全排查，可检测车底是否藏匿可疑或危险物品、人员。",
            "搭载红外夜视高清摄像头和 7 寸高清显示屏，支持低光环境下检查。",
            "支持 355° 电动调节镜头，配备两段折叠式铝合金机身和便携箱包。"
        ],
        scenes: [
            "车辆底部可疑物排查。",
            "车身底部非法改动检查。",
            "人员不便到达区域的可视化探查。"
        ],
        value: [
            "提升车底区域可视化查验效率。",
            "降低人工俯身和低位检查的作业负担。",
            "增强车底可疑物和异常结构的发现能力。"
        ],
        references: [
            { label: "设备说明文档", url: "#" }
        ]
    },
    {
        id: "bianxieshi-duoguangpu-zhengzhao-jianchayi",
        name: "便携式多光谱证照检查仪",
        subtitle: "新锐装备",
        summary: "便携式多光谱证照检查仪是一款专为边检查验岗位设计的手持核验设备，可通过多光谱光源、高清成像和多级放大功能，快速鉴别出入境证件真伪并完成拍照录像取证。",
        model: "DOC-SPECTRUM",
        status: "证照核验",
        accent: "#67ebff",
        accent2: "#ffd166",
        imageFiles: ["便携式多光谱证照检查仪.png", "便携式多光谱证照检查仪.png"],
        imageHint: "当前图片用于展示便携式多光谱证照检查仪外观，后续可补充查验岗位实际使用图。",
        tags: ["多光谱", "证照核验", "手持便携"],
        metrics: [
            { value: "5英寸", label: "配备 1920×1080 高清触摸屏，便于现场观察判读" },
            { value: "10X-35X", label: "支持多级放大倍率，可进行精细观察与刻度测量" },
            { value: "≈5小时", label: "内置 5000mAh 电池，满足一线连续查验需要" }
        ],
        features: [
            "专为边检站人工查验岗位设计，用于快速鉴别出入境证件真伪。",
            "支持图像、视频拍摄，内置高清光学系统和多级放大倍率。",
            "光源涵盖入射白光、红外光、紫外光以及侧白光、侧红外光，并配备独立紫外探照灯。",
            "支持 TF 卡存储扩展及视频输出至外部显示器，便于留存和外接判读。"
        ],
        scenes: [
            "出入境证件人工查验岗位快速核验。",
            "疑难证件精细观察与真伪甄别。",
            "一线查验岗位拍照录像取证。"
        ],
        value: [
            "提升对出入境证件真伪的现场快速识别能力。",
            "增强多光谱条件下的细节观察和证据留存能力。",
            "为一线查验岗位提供高效、精准的技术支撑。"
        ],
        references: [
            { label: "设备说明文档", url: "#" }
        ]
    },
    {
        id: "xunluo-jiqigou",
        name: "巡逻机器狗",
        subtitle: "新锐装备",
        summary: "巡逻机器狗是一套融合 3D 激光雷达、视觉感知和 AI 识别能力的智能巡检装备，可在室外复杂场景下自主定位导航、实时避障，并对可疑行人、车辆等异常事件开展全天候巡检。",
        model: "PATROL-DOG",
        status: "智能巡检",
        accent: "#67ebff",
        accent2: "#9dff8d",
        imageFiles: ["巡检机器狗.png", "巡检机器狗.png"],
        imageHint: "当前图片用于展示巡逻机器狗整机，后续可补充旅检大厅和限定区巡逻应用图。",
        tags: ["机器狗", "自主导航", "智能巡检"],
        metrics: [
            { value: "3D雷达", label: "融合 3D 激光雷达与视觉技术，适应室外复杂环境" },
            { value: "AI识别", label: "可识别可疑行人、车辆等异常事件" },
            { value: "全天候", label: "支持不定时巡逻和持续巡检任务" }
        ],
        features: [
            "融合 3D 激光雷达与视觉技术，具备自主定位导航和实时避障能力。",
            "配备双光云台相机，并结合 AI 视觉技术开展异常事件识别。",
            "可在室外复杂场景下执行全天候智能巡检任务。",
            "灵活性高，可与限定区视频监控形成优势互补。"
        ],
        scenes: [
            "旅检大厅不定时智能巡逻。",
            "口岸限定区巡逻与异常事件识别。",
            "与固定视频监控协同开展补盲巡检。"
        ],
        value: [
            "提升重点区域全天候巡逻覆盖能力。",
            "增强对异常行人和车辆事件的智能发现能力。",
            "补足固定监控视角外的动态巡检能力。"
        ],
        references: [
            { label: "设备说明文档", url: "#" }
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
            <img src="${getImagePath(item.imageFiles[0])}" alt="${item.name}" loading="lazy" decoding="async">
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
    const detailHero = document.querySelector(".detail-hero");
    if (detailHero) {
        detailHero.classList.add("has-art");
        detailHero.style.backgroundImage = [
            "linear-gradient(90deg, rgba(3, 12, 20, 0.98) 0%, rgba(3, 12, 20, 0.94) 36%, rgba(3, 12, 20, 0.7) 58%, rgba(3, 12, 20, 0.42) 76%, rgba(3, 12, 20, 0.74) 100%)",
            "linear-gradient(180deg, rgba(103, 235, 255, 0.06), rgba(103, 235, 255, 0.02))",
            `url("${getImagePath(item.imageFiles[0])}")`
        ].join(", ");
    }
    document.getElementById("detail-image-hint").textContent = item.imageHint;
    const showcaseGrid = document.querySelector(".showcase-grid");
    if (showcaseGrid) {
        const galleryClass =
            item.imageFiles.length <= 1 ? "showcase-single" :
            item.imageFiles.length === 2 ? "showcase-double" :
            item.imageFiles.length === 3 ? "showcase-triple" :
            "showcase-quad";
        showcaseGrid.className = `showcase-grid ${galleryClass}`;
        showcaseGrid.innerHTML = item.imageFiles.map((fileName, index) => `
            <div class="showcase-frame ${index === 0 ? "showcase-primary" : "showcase-secondary"}">
                <img
                    src="${getImagePath(fileName)}"
                    alt="${item.name}${index === 0 ? "主展示图" : `补充展示图${index}`}"
                    loading="lazy"
                    decoding="async"
                >
            </div>
        `).join("");
    }
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
