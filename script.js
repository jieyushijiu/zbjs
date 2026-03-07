const equipmentData = [
    {
        id: "chaji-qiaogun",
        name: "查缉撬棍",
        subtitle: "高强度破拆工具",
        summary: "用于强制开启、缝隙扩张和封闭结构拆检，是一线快速破拆与深度查验的基础装备。",
        model: "BREACH-01",
        status: "常规配发",
        accent: "#67ebff",
        accent2: "#ffb347",
        imageUrl: "https://images.unsplash.com/photo-1542456079-22a83279c17d?q=80&w=1600&auto=format&fit=crop",
        imageHint: "占位图建议后续替换为现场实拍或器材棚拍图。",
        tags: ["破拆", "封闭空间", "强制开拆"],
        metrics: [
            { value: "01", label: "第一层处置，优先解决无法直视和无法开启的问题" },
            { value: "3x", label: "与内窥镜、照明、记录设备联动时效率更高" },
            { value: "24h", label: "适合放入执勤工具组，响应不依赖额外供电" }
        ],
        features: [
            "一体式高强度钢制结构，兼顾撬、顶、压、扩张等多种用途。",
            "适合箱体、隔层、封板和固定物拆检，降低人工徒手操作风险。",
            "与照明和可视化设备配合，可快速打开怀疑点位并继续深查。"
        ],
        scenes: [
            "口岸车辆及货物包裹查验。",
            "封闭箱体、隔层、暗格初步开拆。",
            "可疑包裹或伪装结构的快速处置。"
        ],
        notes: [
            "先评估受力点和保护对象，避免非目标结构受损。",
            "对已开拆位置同步拍照，便于复盘和证据链留存。",
            "执行后检查工具端部磨损情况。"
        ],
        references: [
            { label: "Stanley pry bar 类工具参考", url: "https://www.stanleytools.com/" }
        ]
    },
    {
        id: "chaji-tongtiao",
        name: "查缉通条",
        subtitle: "狭长空腔探查工具",
        summary: "适用于排气管、座椅缝隙、备胎舱和货物堆内部位的插探、拨查和搅动，是非成像条件下的快速触达方案。",
        model: "PROBE-07",
        status: "高频使用",
        accent: "#55f0ff",
        accent2: "#3ddc97",
        imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop",
        imageHint: "当前为金属器械示意图，建议替换为通条实物图。",
        tags: ["插探", "缝隙", "抽检"],
        metrics: [
            { value: "360°", label: "适合围绕可疑点位连续探查，提升盲区覆盖" },
            { value: "2nd", label: "适合作为视觉检查后的第二步确认工具" },
            { value: "Low", label: "维护要求低，适合长期固定配发" }
        ],
        features: [
            "用于狭窄空间深层插探和异常触感识别。",
            "可对散装货物、木箱和软包装进行局部拨查。",
            "有助于发现回弹异常、夹层、暗格和伪装区域。"
        ],
        scenes: [
            "通道车辆临检。",
            "货运车辆抽检。",
            "大体积货物表层以下快速核查。"
        ],
        notes: [
            "插探节奏保持均匀，避免损伤正常结构。",
            "对异常阻尼点位建议立即标记并转成像设备复查。",
            "结束后应擦拭表面并检查杆体弯折。"
        ],
        references: [
            { label: "通用工业探针器械参考", url: "https://www.mcmaster.com/probes/" }
        ]
    },
    {
        id: "chaji-gongjuxiang",
        name: "查缉工具箱",
        subtitle: "现场拆检与应急集成套装",
        summary: "集成拆解、照明、测量、固定和临时处置所需的常用工具，是现场查验任务的基础支撑单元。",
        model: "KIT-09",
        status: "机动保障",
        accent: "#67ebff",
        accent2: "#ffd166",
        imageUrl: "https://images.unsplash.com/photo-1581147036324-c1c7595b0d2f?q=80&w=1600&auto=format&fit=crop",
        imageHint: "当前为工业工具箱示意图，适合后续换成真实套装摆拍图。",
        tags: ["集成", "维护", "应急"],
        metrics: [
            { value: "1 Kit", label: "一箱覆盖拆检、照明和简单处置的基础需求" },
            { value: "Mod", label: "内部隔层可按岗位职责做模块化调整" },
            { value: "Fast", label: "减少临场找工具时间，提升连续作业效率" }
        ],
        features: [
            "包含螺丝刀、扳手、强光手电、测量尺和扎带等常用器具。",
            "适配车辆部件拆解、现场固定和简单维护场景。",
            "统一携行，便于点验、补给和责任归属管理。"
        ],
        scenes: [
            "可疑改装车辆核查。",
            "复杂部位拆解检查。",
            "现场临时处置和设备维护。"
        ],
        notes: [
            "建议按功能分区摆放，并设置工具清单卡。",
            "每次任务后核对数量，避免遗落在现场。",
            "耗材和易损件应单独标记补充周期。"
        ],
        references: [
            { label: "工业工具箱图像参考", url: "https://www.pexels.com/search/toolbox/" }
        ]
    },
    {
        id: "shouchi-beisanse-jianceyi",
        name: "手持背散射检测仪",
        subtitle: "便携式成像扫描设备",
        summary: "通过非接触扫描和实时成像发现夹层、门板、轮胎与内饰中的异常结构，适合重点车辆无损检查。",
        model: "SCAN-XR",
        status: "重点装备",
        accent: "#77f5ff",
        accent2: "#3ddc97",
        imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
        imageHint: "当前为便携检测设备类示意图，建议后续换成真实仪器图。",
        tags: ["成像", "无损检查", "便携"],
        metrics: [
            { value: "Real-time", label: "扫描和判读在同一链路完成，适合快速筛查" },
            { value: "Low-touch", label: "非接触检查减少对车辆和货物的扰动" },
            { value: "Key", label: "适合重点车辆和重点点位复核" }
        ],
        features: [
            "非接触扫描，支持现场快速获取结构差异图像。",
            "可用于夹层、门板、轮胎和部分货物内部异常识别。",
            "降低大面积破拆概率，把人工注意力集中到高风险区域。"
        ],
        scenes: [
            "车辆夹层排查。",
            "重点车辆无损检测。",
            "货物快速初筛。"
        ],
        notes: [
            "严格执行射线或设备安全操作要求。",
            "对异常轮廓应保留截图并联动其他设备复核。",
            "任务结束后完成设备状态记录。"
        ],
        references: [
            { label: "手持背散射检测设备参考", url: "https://www.rapiscansystems.com/en/products/miniz" }
        ]
    },
    {
        id: "sixiang-neikuijing",
        name: "四向内窥镜",
        subtitle: "狭小空间可视化取证装备",
        summary: "通过柔性管线和多向可控探头进入难以触达的腔体，完成可视化检查、拍照和录像取证。",
        model: "V-SCOPE 4D",
        status: "精查装备",
        accent: "#67ebff",
        accent2: "#9dff8d",
        imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22731d8d9d?q=80&w=1600&auto=format&fit=crop",
        imageHint: "当前为工业精密设备示意图，适合后续换成内窥镜实拍图。",
        tags: ["内窥", "可视化", "取证"],
        metrics: [
            { value: "4-way", label: "多向操控提升拐角和夹层内部成像能力" },
            { value: "HD", label: "适合拍照录像固定关键证据" },
            { value: "Deep", label: "深入发动机舱、仪表台和车门腔体" }
        ],
        features: [
            "可控探头和柔性管线适应复杂转向环境。",
            "高清成像，支持拍照和录像留存。",
            "对非破拆难以观察的内部空间尤其有效。"
        ],
        scenes: [
            "暗格与夹层排查。",
            "非破拆可视化检查。",
            "复杂结构内部核查。"
        ],
        notes: [
            "推进和回收探头时保持缓慢，避免刮擦镜头。",
            "关键画面及时截图并绑定时间地点信息。",
            "使用后清洁镜头和线缆。"
        ],
        references: [
            { label: "工业 videoscope 参考", url: "https://www.olympus-ims.com/en/industrial-videoscope/" }
        ]
    },
    {
        id: "chedi-jiance-jiqiren",
        name: "车底检测机器人",
        subtitle: "自动化车底扫描平台",
        summary: "替代人工钻底，通过移动平台搭载摄像和扫描模块完成车底全景检查，适合高流量与高风险场景。",
        model: "UV-ROBOT",
        status: "高价值装备",
        accent: "#67ebff",
        accent2: "#ff8f70",
        imageUrl: "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?q=80&w=1600&auto=format&fit=crop",
        imageHint: "当前为机器人设备示意图，建议后续替换为车底机器人实景图。",
        tags: ["机器人", "车底", "扫描"],
        metrics: [
            { value: "Auto", label: "自动化扫描减少人工俯卧检查风险" },
            { value: "Wide", label: "适合高流量通道的连续检查任务" },
            { value: "Archive", label: "图像结果可归档并绑定车辆信息" }
        ],
        features: [
            "全向移动，完成车底全景扫描和图像采集。",
            "搭载高清摄像和扫描模块，提升观察精度。",
            "对外挂、改装和异常装置具备较强发现能力。"
        ],
        scenes: [
            "口岸通道车辆车底普查。",
            "高风险车辆重点安检。",
            "大流量车辆快速筛查。"
        ],
        notes: [
            "作业轨迹区域应保持整洁平整。",
            "扫描结果要和车牌、时间绑定归档。",
            "异常区域建议由人工进行二次确认。"
        ],
        references: [
            { label: "Under vehicle inspection 设备参考", url: "https://www.zkteco.com/en/product/uvss" }
        ]
    },
    {
        id: "bianxieshi-dupin-baozha-jianceyi",
        name: "便携式毒品爆炸检测仪",
        subtitle: "痕量识别与快速初筛设备",
        summary: "通过擦拭取样和快速识别技术，对毒品和爆炸物残留进行现场筛查，是高风险人员和物品检查的重要补充。",
        model: "TRACE-EX",
        status: "专用检测",
        accent: "#67ebff",
        accent2: "#ffd166",
        imageUrl: "https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=1600&auto=format&fit=crop",
        imageHint: "当前为检测设备类示意图，建议后续换成真实仪器或操作场景图。",
        tags: ["痕量检测", "快速", "筛查"],
        metrics: [
            { value: "Trace", label: "针对微量残留做快速判断，适合一线筛查" },
            { value: "Alert", label: "支持声光报警，反馈直观" },
            { value: "Portable", label: "设备便携，可伴随检查链路移动使用" }
        ],
        features: [
            "擦拭取样即可进行快速检测。",
            "响应速度快，适合现场初筛和风险分流。",
            "可用于毒品与爆炸物残留的初步识别。"
        ],
        scenes: [
            "口岸现场快速初筛。",
            "车辆及随身物品检查。",
            "高风险人员安检。"
        ],
        notes: [
            "采样时优先覆盖高频接触面和可疑接缝。",
            "阳性或疑似结果建议复测并转确证流程。",
            "更换耗材后应重新校准。"
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
            <span>Metric</span>
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

function renderHome() {
    const grid = document.getElementById("equipment-grid");
    if (!grid) {
        return;
    }

    grid.innerHTML = equipmentData.map((item, index) => `
        <a class="equipment-card" href="equip/${item.id}/index.html" style="--delay:${index * 0.08}s">
            <img src="${item.imageUrl}" alt="${item.name}">
            <div class="equipment-card-body">
                <span class="small-label">${item.model}</span>
                <h3>${item.name}</h3>
                <p>${item.summary}</p>
                <div class="tag-row">${createTags(item.tags)}</div>
                <div class="card-footer">
                    <span>独立页面</span>
                    <span>进入详情</span>
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

    const currentIndex = equipmentData.findIndex((entry) => entry.id === item.id);
    const previousItem = equipmentData[(currentIndex - 1 + equipmentData.length) % equipmentData.length];
    const nextItem = equipmentData[(currentIndex + 1) % equipmentData.length];

    document.getElementById("detail-title").textContent = item.name;
    document.getElementById("detail-subtitle").textContent = item.subtitle;
    document.getElementById("detail-summary").textContent = item.summary;
    document.getElementById("detail-model").textContent = item.model;
    document.getElementById("detail-status").textContent = item.status;
    document.getElementById("detail-image").src = item.imageUrl;
    document.getElementById("detail-image").alt = item.name;
    document.getElementById("detail-image-hint").textContent = item.imageHint;
    document.getElementById("detail-tags").innerHTML = item.tags.map((tag) => `<span class="detail-chip">${tag}</span>`).join("");
    document.getElementById("detail-metrics").innerHTML = createMetrics(item.metrics);
    document.getElementById("detail-features").innerHTML = createList(item.features);
    document.getElementById("detail-scenes").innerHTML = createList(item.scenes);
    document.getElementById("detail-notes").innerHTML = createList(item.notes);
    document.getElementById("detail-references").innerHTML = createReferences(item.references);
    document.getElementById("copy-link").dataset.link = window.location.href;
    document.getElementById("previous-equipment").href = `../${previousItem.id}/index.html`;
    document.getElementById("previous-equipment").textContent = `上一件 ${previousItem.name}`;
    document.getElementById("next-equipment").href = `../${nextItem.id}/index.html`;
    document.getElementById("next-equipment").textContent = `下一件 ${nextItem.name}`;
}

function bindActions() {
    const copyButton = document.getElementById("copy-link");
    if (!copyButton) {
        return;
    }

    copyButton.addEventListener("click", () => {
        const link = copyButton.dataset.link;
        if (!link) {
            return;
        }
        navigator.clipboard.writeText(link).then(() => {
            copyButton.textContent = "链接已复制";
            window.setTimeout(() => {
                copyButton.textContent = "复制二维码链接";
            }, 1400);
        }).catch(() => {
            copyButton.textContent = "复制失败";
            window.setTimeout(() => {
                copyButton.textContent = "复制二维码链接";
            }, 1400);
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const pageType = document.body.dataset.page;
    if (pageType === "home") {
        renderHome();
    }
    if (pageType === "detail") {
        renderDetail();
    }
    bindActions();
});
