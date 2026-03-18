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
                            <img class="card-image" src="${getCardImagePath(item.imageFiles[0])}" alt="${item.name}">
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
                            <div class="qr-slot-title">二维码区域</div>
                            <div class="qr-slot-box"></div>
                            <div class="qr-slot-text">扫码查看装备详情</div>
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

    root.innerHTML = equipmentData.map(createCard).join("");
});
