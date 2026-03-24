const homepageCard = {
    name: "装备数字展厅主页",
    summary: "扫码可直接进入装备数字展厅主页，统一查看公路口岸通道查缉装备矩阵、装备详情页面和现场展示内容。",
    model: "HOME",
    status: "主页入口",
    imageFiles: ["主页.png"],
    qrName: "主页"
};

function truncateCardSummary(text) {
    const normalized = (text || "").replace(/\s+/g, " ").trim();
    if (normalized.length <= 102) {
        return normalized;
    }
    return `${normalized.slice(0, 102)}...`;
}

function getCardImagePath(fileName) {
    return `image/${fileName}`;
}

function getQrImagePath(itemName) {
    return `image/二维码/${itemName}.png`;
}

function createCard(item) {
    return `
        <section class="card-sheet">
            <div class="card-inner">
                <header class="card-header">
                    <div class="brand-chip">
                        <img class="card-logo" src="image/图标-256.png" alt="国家移民管理局标识">
                        <div class="brand-copy">
                            <div class="brand-cn">国家移民管理</div>
                            <div class="brand-en">IMMIGRATION INSPECTION</div>
                        </div>
                    </div>
                    <div class="card-title-block">
                        <div class="title-kicker">公路口岸通道查缉装备展牌</div>
                        <h1 class="card-title">${item.name}</h1>
                    </div>
                </header>

                <div class="card-body">
                    <div class="card-main">
                        <div class="card-image-wrap">
                            <img class="card-image" src="${getCardImagePath(item.imageFiles[0])}" alt="${item.name}" loading="lazy" decoding="async">
                        </div>
                        <div class="summary-panel">
                            <div class="panel-label">简短介绍</div>
                            <p class="card-summary">${truncateCardSummary(item.summary)}</p>
                        </div>
                    </div>

                    <aside class="card-side">
                        <div class="meta-panel">
                            <div class="panel-label">型号</div>
                            <div class="meta-value">${item.model}</div>
                        </div>
                        <div class="qr-slot">
                            <div class="qr-slot-title">二维码</div>
                            <div class="qr-slot-box">
                                <img
                                    class="qr-slot-image"
                                    src="${getQrImagePath(item.qrName || item.name)}"
                                    alt="${item.name}二维码"
                                    loading="lazy"
                                    decoding="async"
                                    onerror="this.closest('.qr-slot-box').classList.add('qr-slot-box-empty'); this.remove();"
                                >
                            </div>
                            <div class="qr-slot-text">扫码查看详情</div>
                        </div>
                        <div class="meta-panel hint-panel">
                            <div class="panel-label">类别</div>
                            <div class="meta-value">${item.status}</div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("cards-root");
    if (!root || typeof equipmentData === "undefined") {
        return;
    }

    const cardItems = [homepageCard, ...equipmentData];
    root.innerHTML = cardItems.map(createCard).join("");
});
