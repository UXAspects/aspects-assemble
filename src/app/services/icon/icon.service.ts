import { Injectable } from '@angular/core';

@Injectable()
export class IconService {

    getIconHtml(icon: string): SVGSVGElement {
        let parser = new DOMParser();
        let doc = parser.parseFromString(icon, 'text/html');
        return doc.body.firstElementChild as SVGSVGElement;
    }

    achievement: string = require('!!svg-inline-loader!../../assets/icons/achievement.svg');
    action: string = require('!!svg-inline-loader!../../assets/icons/action.svg');
    actions: string = require('!!svg-inline-loader!../../assets/icons/actions.svg');
    active: string = require('!!svg-inline-loader!../../assets/icons/active.svg');
    add: string = require('!!svg-inline-loader!../../assets/icons/add.svg');
    advancedSearch: string = require('!!svg-inline-loader!../../assets/icons/advanced-search.svg');
    aggregate: string = require('!!svg-inline-loader!../../assets/icons/aggregate.svg');
    alarm: string = require('!!svg-inline-loader!../../assets/icons/alarm.svg');
    alert: string = require('!!svg-inline-loader!../../assets/icons/alert.svg');
    analytics: string = require('!!svg-inline-loader!../../assets/icons/analytics.svg');
    announcement: string = require('!!svg-inline-loader!../../assets/icons/announcement.svg');
    app: string = require('!!svg-inline-loader!../../assets/icons/app.svg');
    archive: string = require('!!svg-inline-loader!../../assets/icons/archive.svg');
    article: string = require('!!svg-inline-loader!../../assets/icons/article.svg');
    ascend: string = require('!!svg-inline-loader!../../assets/icons/ascend.svg');
    assistant: string = require('!!svg-inline-loader!../../assets/icons/assistant.svg');
    attachment: string = require('!!svg-inline-loader!../../assets/icons/attachment.svg');
    barChart: string = require('!!svg-inline-loader!../../assets/icons/bar-chart.svg');
    blog: string = require('!!svg-inline-loader!../../assets/icons/blog.svg');
    book: string = require('!!svg-inline-loader!../../assets/icons/book.svg');
    bookmark: string = require('!!svg-inline-loader!../../assets/icons/bookmark.svg');
    bundle: string = require('!!svg-inline-loader!../../assets/icons/bundle.svg');
    calculator: string = require('!!svg-inline-loader!../../assets/icons/calculator.svg');
    calendar: string = require('!!svg-inline-loader!../../assets/icons/calendar.svg');
    camera: string = require('!!svg-inline-loader!../../assets/icons/camera.svg');
    capacity: string = require('!!svg-inline-loader!../../assets/icons/capacity.svg');
    caretDownFilled: string = require('!!svg-inline-loader!../../assets/icons/caret-down-filled.svg');
    caretDown: string = require('!!svg-inline-loader!../../assets/icons/caret-down.svg');
    caretNextFilled: string = require('!!svg-inline-loader!../../assets/icons/caret-next-filled.svg');
    caretNext: string = require('!!svg-inline-loader!../../assets/icons/caret-next.svg');
    caretPreviousFilled: string = require('!!svg-inline-loader!../../assets/icons/caret-previous-filled.svg');
    caretPrevious: string = require('!!svg-inline-loader!../../assets/icons/caret-previous.svg');
    caretUpFilled: string = require('!!svg-inline-loader!../../assets/icons/caret-up-filled.svg');
    caretUp: string = require('!!svg-inline-loader!../../assets/icons/caret-up.svg');
    catalog: string = require('!!svg-inline-loader!../../assets/icons/catalog.svg');
    chapterAdd: string = require('!!svg-inline-loader!../../assets/icons/chapter-add.svg');
    chapterNext: string = require('!!svg-inline-loader!../../assets/icons/chapter-next.svg');
    chapterPrevious: string = require('!!svg-inline-loader!../../assets/icons/chapter-previous.svg');
    chatAttachment: string = require('!!svg-inline-loader!../../assets/icons/chat-attachment.svg');
    chat: string = require('!!svg-inline-loader!../../assets/icons/chat.svg');
    checkboxSelected: string = require('!!svg-inline-loader!../../assets/icons/checkbox-selected.svg');
    checkbox: string = require('!!svg-inline-loader!../../assets/icons/checkbox.svg');
    checkmark: string = require('!!svg-inline-loader!../../assets/icons/checkmark.svg');
    circularView: string = require('!!svg-inline-loader!../../assets/icons/circular-view.svg');
    clipboard: string = require('!!svg-inline-loader!../../assets/icons/clipboard.svg');
    clone: string = require('!!svg-inline-loader!../../assets/icons/clone.svg');
    close: string = require('!!svg-inline-loader!../../assets/icons/close.svg');
    cloudComputer: string = require('!!svg-inline-loader!../../assets/icons/cloud-computer.svg');
    cloudDownload: string = require('!!svg-inline-loader!../../assets/icons/cloud-download.svg');
    cloudSoftware: string = require('!!svg-inline-loader!../../assets/icons/cloud-software.svg');
    cloudUpload: string = require('!!svg-inline-loader!../../assets/icons/cloud-upload.svg');
    cloud: string = require('!!svg-inline-loader!../../assets/icons/cloud.svg');
    cluster: string = require('!!svg-inline-loader!../../assets/icons/cluster.svg');
    code: string = require('!!svg-inline-loader!../../assets/icons/code.svg');
    commandLine: string = require('!!svg-inline-loader!../../assets/icons/command-line.svg');
    compare: string = require('!!svg-inline-loader!../../assets/icons/compare.svg');
    compass: string = require('!!svg-inline-loader!../../assets/icons/compass.svg');
    compliance: string = require('!!svg-inline-loader!../../assets/icons/compliance.svg');
    computerPersonal: string = require('!!svg-inline-loader!../../assets/icons/computer-personal.svg');
    configuration: string = require('!!svg-inline-loader!../../assets/icons/configuration.svg');
    connect: string = require('!!svg-inline-loader!../../assets/icons/connect.svg');
    contactCard: string = require('!!svg-inline-loader!../../assets/icons/contact-card.svg');
    contactUs: string = require('!!svg-inline-loader!../../assets/icons/contact-us.svg');
    contract: string = require('!!svg-inline-loader!../../assets/icons/contract.svg');
    copy: string = require('!!svg-inline-loader!../../assets/icons/copy.svg');
    cube: string = require('!!svg-inline-loader!../../assets/icons/cube.svg');
    cubes: string = require('!!svg-inline-loader!../../assets/icons/cubes.svg');
    cursor: string = require('!!svg-inline-loader!../../assets/icons/cursor.svg');
    cut: string = require('!!svg-inline-loader!../../assets/icons/cut.svg');
    cycle: string = require('!!svg-inline-loader!../../assets/icons/cycle.svg');
    dashboard: string = require('!!svg-inline-loader!../../assets/icons/dashboard.svg');
    database: string = require('!!svg-inline-loader!../../assets/icons/database.svg');
    defect: string = require('!!svg-inline-loader!../../assets/icons/defect.svg');
    deliver: string = require('!!svg-inline-loader!../../assets/icons/deliver.svg');
    deployment: string = require('!!svg-inline-loader!../../assets/icons/deployment.svg');
    descend: string = require('!!svg-inline-loader!../../assets/icons/descend.svg');
    desktop: string = require('!!svg-inline-loader!../../assets/icons/desktop.svg');
    detach: string = require('!!svg-inline-loader!../../assets/icons/detach.svg');
    directions: string = require('!!svg-inline-loader!../../assets/icons/directions.svg');
    dislike: string = require('!!svg-inline-loader!../../assets/icons/dislike.svg');
    divideFour: string = require('!!svg-inline-loader!../../assets/icons/divide-four.svg');
    divideRight: string = require('!!svg-inline-loader!../../assets/icons/divide-right.svg');
    divideThree: string = require('!!svg-inline-loader!../../assets/icons/divide-three.svg');
    divide: string = require('!!svg-inline-loader!../../assets/icons/divide.svg');
    documentCloud: string = require('!!svg-inline-loader!../../assets/icons/document-cloud.svg');
    documentCompress: string = require('!!svg-inline-loader!../../assets/icons/document-compress.svg');
    documentConfig: string = require('!!svg-inline-loader!../../assets/icons/document-config.svg');
    documentCsv: string = require('!!svg-inline-loader!../../assets/icons/document-csv.svg');
    documentData: string = require('!!svg-inline-loader!../../assets/icons/document-data.svg');
    documentDownload: string = require('!!svg-inline-loader!../../assets/icons/document-download.svg');
    documentExcel: string = require('!!svg-inline-loader!../../assets/icons/document-excel.svg');
    documentExecutable: string = require('!!svg-inline-loader!../../assets/icons/document-executable.svg');
    documentImage: string = require('!!svg-inline-loader!../../assets/icons/document-image.svg');
    documentLocked: string = require('!!svg-inline-loader!../../assets/icons/document-locked.svg');
    documentMissing: string = require('!!svg-inline-loader!../../assets/icons/document-missing.svg');
    documentNotes: string = require('!!svg-inline-loader!../../assets/icons/document-notes.svg');
    documentOutlook: string = require('!!svg-inline-loader!../../assets/icons/document-outlook.svg');
    documentPdf: string = require('!!svg-inline-loader!../../assets/icons/document-pdf.svg');
    documentPerformance: string = require('!!svg-inline-loader!../../assets/icons/document-performance.svg');
    documentPowerpoint: string = require('!!svg-inline-loader!../../assets/icons/document-powerpoint.svg');
    documentRtf: string = require('!!svg-inline-loader!../../assets/icons/document-rtf.svg');
    documentSound: string = require('!!svg-inline-loader!../../assets/icons/document-sound.svg');
    documentTest: string = require('!!svg-inline-loader!../../assets/icons/document-test.svg');
    documentText: string = require('!!svg-inline-loader!../../assets/icons/document-text.svg');
    documentThreat: string = require('!!svg-inline-loader!../../assets/icons/document-threat.svg');
    documentTime: string = require('!!svg-inline-loader!../../assets/icons/document-time.svg');
    documentTransfer: string = require('!!svg-inline-loader!../../assets/icons/document-transfer.svg');
    documentTxt: string = require('!!svg-inline-loader!../../assets/icons/document-txt.svg');
    documentUpdate: string = require('!!svg-inline-loader!../../assets/icons/document-update.svg');
    documentUpload: string = require('!!svg-inline-loader!../../assets/icons/document-upload.svg');
    documentUser: string = require('!!svg-inline-loader!../../assets/icons/document-user.svg');
    documentVerified: string = require('!!svg-inline-loader!../../assets/icons/document-verified.svg');
    documentVideo: string = require('!!svg-inline-loader!../../assets/icons/document-video.svg');
    documentWord: string = require('!!svg-inline-loader!../../assets/icons/document-word.svg');
    document: string = require('!!svg-inline-loader!../../assets/icons/document.svg');
    domain: string = require('!!svg-inline-loader!../../assets/icons/domain.svg');
    down: string = require('!!svg-inline-loader!../../assets/icons/down.svg');
    download: string = require('!!svg-inline-loader!../../assets/icons/download.svg');
    drag: string = require('!!svg-inline-loader!../../assets/icons/drag.svg');
    driveCage: string = require('!!svg-inline-loader!../../assets/icons/drive-cage.svg');
    duplicate: string = require('!!svg-inline-loader!../../assets/icons/duplicate.svg');
    edit: string = require('!!svg-inline-loader!../../assets/icons/edit.svg');
    eject: string = require('!!svg-inline-loader!../../assets/icons/eject.svg');
    expand: string = require('!!svg-inline-loader!../../assets/icons/expand.svg');
    fan: string = require('!!svg-inline-loader!../../assets/icons/fan.svg');
    fastForward: string = require('!!svg-inline-loader!../../assets/icons/fast-forward.svg');
    favorite: string = require('!!svg-inline-loader!../../assets/icons/favorite.svg');
    filter: string = require('!!svg-inline-loader!../../assets/icons/filter.svg');
    firstAid: string = require('!!svg-inline-loader!../../assets/icons/first-aid.svg');
    flag: string = require('!!svg-inline-loader!../../assets/icons/flag.svg');
    folderCycle: string = require('!!svg-inline-loader!../../assets/icons/folder-cycle.svg');
    folderOpen: string = require('!!svg-inline-loader!../../assets/icons/folder-open.svg');
    folder: string = require('!!svg-inline-loader!../../assets/icons/folder.svg');
    gallery: string = require('!!svg-inline-loader!../../assets/icons/gallery.svg');
    globe: string = require('!!svg-inline-loader!../../assets/icons/globe.svg');
    grid: string = require('!!svg-inline-loader!../../assets/icons/grid.svg');
    group: string = require('!!svg-inline-loader!../../assets/icons/group.svg');
    grow: string = require('!!svg-inline-loader!../../assets/icons/grow.svg');
    halt: string = require('!!svg-inline-loader!../../assets/icons/halt.svg');
    help: string = require('!!svg-inline-loader!../../assets/icons/help.svg');
    history: string = require('!!svg-inline-loader!../../assets/icons/history.svg');
    home: string = require('!!svg-inline-loader!../../assets/icons/home.svg');
    hostMaintenance: string = require('!!svg-inline-loader!../../assets/icons/host-maintenance.svg');
    host: string = require('!!svg-inline-loader!../../assets/icons/host.svg');
    image: string = require('!!svg-inline-loader!../../assets/icons/image.svg');
    impact: string = require('!!svg-inline-loader!../../assets/icons/impact.svg');
    inProgress: string = require('!!svg-inline-loader!../../assets/icons/in-progress.svg');
    inactive: string = require('!!svg-inline-loader!../../assets/icons/inactive.svg');
    inbox: string = require('!!svg-inline-loader!../../assets/icons/inbox.svg');
    indicator: string = require('!!svg-inline-loader!../../assets/icons/indicator.svg');
    information: string = require('!!svg-inline-loader!../../assets/icons/information.svg');
    inherit: string = require('!!svg-inline-loader!../../assets/icons/inherit.svg');
    install: string = require('!!svg-inline-loader!../../assets/icons/install.svg');
    integration: string = require('!!svg-inline-loader!../../assets/icons/integration.svg');
    iteration: string = require('!!svg-inline-loader!../../assets/icons/iteration.svg');
    java: string = require('!!svg-inline-loader!../../assets/icons/java.svg');
    language: string = require('!!svg-inline-loader!../../assets/icons/language.svg');
    launch: string = require('!!svg-inline-loader!../../assets/icons/launch.svg');
    license: string = require('!!svg-inline-loader!../../assets/icons/license.svg');
    like: string = require('!!svg-inline-loader!../../assets/icons/like.svg');
    lineChart: string = require('!!svg-inline-loader!../../assets/icons/line-chart.svg');
    linkBottom: string = require('!!svg-inline-loader!../../assets/icons/link-bottom.svg');
    linkDown: string = require('!!svg-inline-loader!../../assets/icons/link-down.svg');
    linkNext: string = require('!!svg-inline-loader!../../assets/icons/link-next.svg');
    linkPrevious: string = require('!!svg-inline-loader!../../assets/icons/link-previous.svg');
    linkTop: string = require('!!svg-inline-loader!../../assets/icons/link-top.svg');
    linkUp: string = require('!!svg-inline-loader!../../assets/icons/link-up.svg');
    link: string = require('!!svg-inline-loader!../../assets/icons/link.svg');
    list: string = require('!!svg-inline-loader!../../assets/icons/list.svg');
    locationPin: string = require('!!svg-inline-loader!../../assets/icons/location-pin.svg');
    location: string = require('!!svg-inline-loader!../../assets/icons/location.svg');
    lock: string = require('!!svg-inline-loader!../../assets/icons/lock.svg');
    login: string = require('!!svg-inline-loader!../../assets/icons/login.svg');
    logout: string = require('!!svg-inline-loader!../../assets/icons/logout.svg');
    mailAttachment: string = require('!!svg-inline-loader!../../assets/icons/mail-attachment.svg');
    mail: string = require('!!svg-inline-loader!../../assets/icons/mail.svg');
    manual: string = require('!!svg-inline-loader!../../assets/icons/manual.svg');
    mapLocation: string = require('!!svg-inline-loader!../../assets/icons/map-location.svg');
    map: string = require('!!svg-inline-loader!../../assets/icons/map.svg');
    menu: string = require('!!svg-inline-loader!../../assets/icons/menu.svg');
    microphone: string = require('!!svg-inline-loader!../../assets/icons/microphone.svg');
    monitor: string = require('!!svg-inline-loader!../../assets/icons/monitor.svg');
    more: string = require('!!svg-inline-loader!../../assets/icons/more.svg');
    multiple: string = require('!!svg-inline-loader!../../assets/icons/multiple.svg');
    navigate: string = require('!!svg-inline-loader!../../assets/icons/navigate.svg');
    newWindow: string = require('!!svg-inline-loader!../../assets/icons/new-window.svg');
    new: string = require('!!svg-inline-loader!../../assets/icons/new.svg');
    next: string = require('!!svg-inline-loader!../../assets/icons/next.svg');
    notes: string = require('!!svg-inline-loader!../../assets/icons/notes.svg');
    notification: string = require('!!svg-inline-loader!../../assets/icons/notification.svg');
    optimization: string = require('!!svg-inline-loader!../../assets/icons/optimization.svg');
    organization: string = require('!!svg-inline-loader!../../assets/icons/organization.svg');
    overview: string = require('!!svg-inline-loader!../../assets/icons/overview.svg');
    pan: string = require('!!svg-inline-loader!../../assets/icons/pan.svg');
    pause: string = require('!!svg-inline-loader!../../assets/icons/pause.svg');
    paymentGoogleWallet: string = require('!!svg-inline-loader!../../assets/icons/payment-google-wallet.svg');
    paymentMastercard: string = require('!!svg-inline-loader!../../assets/icons/payment-mastercard.svg');
    paymentPaypal: string = require('!!svg-inline-loader!../../assets/icons/payment-paypal.svg');
    paymentSquare: string = require('!!svg-inline-loader!../../assets/icons/payment-square.svg');
    paymentVisa: string = require('!!svg-inline-loader!../../assets/icons/payment-visa.svg');
    pin: string = require('!!svg-inline-loader!../../assets/icons/pin.svg');
    plan: string = require('!!svg-inline-loader!../../assets/icons/plan.svg');
    platformApple: string = require('!!svg-inline-loader!../../assets/icons/platform-apple.svg');
    platformChrome: string = require('!!svg-inline-loader!../../assets/icons/platform-chrome.svg');
    platformDropbox: string = require('!!svg-inline-loader!../../assets/icons/platform-dropbox.svg');
    platformEdge: string = require('!!svg-inline-loader!../../assets/icons/platform-edge.svg');
    platformFirefox: string = require('!!svg-inline-loader!../../assets/icons/platform-firefox.svg');
    platformInternetExplorer: string = require('!!svg-inline-loader!../../assets/icons/platform-internet-explorer.svg');
    platformSkype: string = require('!!svg-inline-loader!../../assets/icons/platform-skype.svg');
    platformWindows: string = require('!!svg-inline-loader!../../assets/icons/platform-windows.svg');
    play: string = require('!!svg-inline-loader!../../assets/icons/play.svg');
    power: string = require('!!svg-inline-loader!../../assets/icons/power.svg');
    previous: string = require('!!svg-inline-loader!../../assets/icons/previous.svg');
    print: string = require('!!svg-inline-loader!../../assets/icons/print.svg');
    quickView: string = require('!!svg-inline-loader!../../assets/icons/quick-view.svg');
    radialSelected: string = require('!!svg-inline-loader!../../assets/icons/radial-selected.svg');
    radial: string = require('!!svg-inline-loader!../../assets/icons/radial.svg');
    refresh: string = require('!!svg-inline-loader!../../assets/icons/refresh.svg');
    resources: string = require('!!svg-inline-loader!../../assets/icons/resources.svg');
    rewind: string = require('!!svg-inline-loader!../../assets/icons/rewind.svg');
    risk: string = require('!!svg-inline-loader!../../assets/icons/risk.svg');
    rss: string = require('!!svg-inline-loader!../../assets/icons/rss.svg');
    satellite: string = require('!!svg-inline-loader!../../assets/icons/satellite.svg');
    scheduleClone: string = require('!!svg-inline-loader!../../assets/icons/schedule-clone.svg');
    scheduleNew: string = require('!!svg-inline-loader!../../assets/icons/schedule-new.svg');
    schedulePlay: string = require('!!svg-inline-loader!../../assets/icons/schedule-play.svg');
    schedule: string = require('!!svg-inline-loader!../../assets/icons/schedule.svg');
    scorecard: string = require('!!svg-inline-loader!../../assets/icons/scorecard.svg');
    search: string = require('!!svg-inline-loader!../../assets/icons/search.svg');
    secure: string = require('!!svg-inline-loader!../../assets/icons/secure.svg');
    selectLeft: string = require('!!svg-inline-loader!../../assets/icons/select-left.svg');
    select: string = require('!!svg-inline-loader!../../assets/icons/select.svg');
    serverCluster: string = require('!!svg-inline-loader!../../assets/icons/server-cluster.svg');
    server: string = require('!!svg-inline-loader!../../assets/icons/server.svg');
    servers: string = require('!!svg-inline-loader!../../assets/icons/servers.svg');
    serviceBusiness: string = require('!!svg-inline-loader!../../assets/icons/service-business.svg');
    serviceStart: string = require('!!svg-inline-loader!../../assets/icons/service-start.svg');
    share: string = require('!!svg-inline-loader!../../assets/icons/share.svg');
    shieldConfigure: string = require('!!svg-inline-loader!../../assets/icons/shield-configure.svg');
    shield: string = require('!!svg-inline-loader!../../assets/icons/shield.svg');
    shift: string = require('!!svg-inline-loader!../../assets/icons/shift.svg');
    shopBasket: string = require('!!svg-inline-loader!../../assets/icons/shop-basket.svg');
    shopCart: string = require('!!svg-inline-loader!../../assets/icons/shop-cart.svg');
    soa: string = require('!!svg-inline-loader!../../assets/icons/soa.svg');
    socialEmail: string = require('!!svg-inline-loader!../../assets/icons/social-email.svg');
    socialFacebook: string = require('!!svg-inline-loader!../../assets/icons/social-facebook.svg');
    socialGithub: string = require('!!svg-inline-loader!../../assets/icons/social-github.svg');
    socialGoogle: string = require('!!svg-inline-loader!../../assets/icons/social-google.svg');
    socialInstagram: string = require('!!svg-inline-loader!../../assets/icons/social-instagram.svg');
    socialLinkedin: string = require('!!svg-inline-loader!../../assets/icons/social-linkedin.svg');
    socialMedium: string = require('!!svg-inline-loader!../../assets/icons/social-medium.svg');
    socialPinterest: string = require('!!svg-inline-loader!../../assets/icons/social-pinterest.svg');
    socialReddit: string = require('!!svg-inline-loader!../../assets/icons/social-reddit.svg');
    socialSlack: string = require('!!svg-inline-loader!../../assets/icons/social-slack.svg');
    socialTumblr: string = require('!!svg-inline-loader!../../assets/icons/social-tumblr.svg');
    socialTwitter: string = require('!!svg-inline-loader!../../assets/icons/social-twitter.svg');
    socialVimeo: string = require('!!svg-inline-loader!../../assets/icons/social-vimeo.svg');
    socialYoutube: string = require('!!svg-inline-loader!../../assets/icons/social-youtube.svg');
    sort: string = require('!!svg-inline-loader!../../assets/icons/sort.svg');
    stakeholder: string = require('!!svg-inline-loader!../../assets/icons/stakeholder.svg');
    starHalf: string = require('!!svg-inline-loader!../../assets/icons/star-half.svg');
    star: string = require('!!svg-inline-loader!../../assets/icons/star.svg');
    steps: string = require('!!svg-inline-loader!../../assets/icons/steps.svg');
    storage: string = require('!!svg-inline-loader!../../assets/icons/storage.svg');
    streetView: string = require('!!svg-inline-loader!../../assets/icons/street-view.svg');
    subtract: string = require('!!svg-inline-loader!../../assets/icons/subtract.svg');
    support: string = require('!!svg-inline-loader!../../assets/icons/support.svg');
    sync: string = require('!!svg-inline-loader!../../assets/icons/sync.svg');
    system: string = require('!!svg-inline-loader!../../assets/icons/system.svg');
    tabNext: string = require('!!svg-inline-loader!../../assets/icons/tab-next.svg');
    tabPrevious: string = require('!!svg-inline-loader!../../assets/icons/tab-previous.svg');
    tabUp: string = require('!!svg-inline-loader!../../assets/icons/tab-up.svg');
    tableAdd: string = require('!!svg-inline-loader!../../assets/icons/table-add.svg');
    table: string = require('!!svg-inline-loader!../../assets/icons/table.svg');
    tag: string = require('!!svg-inline-loader!../../assets/icons/tag.svg');
    target: string = require('!!svg-inline-loader!../../assets/icons/target.svg');
    task: string = require('!!svg-inline-loader!../../assets/icons/task.svg');
    template: string = require('!!svg-inline-loader!../../assets/icons/template.svg');
    testDesktop: string = require('!!svg-inline-loader!../../assets/icons/test-desktop.svg');
    test: string = require('!!svg-inline-loader!../../assets/icons/test.svg');
    textWrap: string = require('!!svg-inline-loader!../../assets/icons/text-wrap.svg');
    threats: string = require('!!svg-inline-loader!../../assets/icons/threats.svg');
    ticket: string = require('!!svg-inline-loader!../../assets/icons/ticket.svg');
    tools: string = require('!!svg-inline-loader!../../assets/icons/tools.svg');
    tooltip: string = require('!!svg-inline-loader!../../assets/icons/tooltip.svg');
    transaction: string = require('!!svg-inline-loader!../../assets/icons/transaction.svg');
    trash: string = require('!!svg-inline-loader!../../assets/icons/trash.svg');
    tree: string = require('!!svg-inline-loader!../../assets/icons/tree.svg');
    trigger: string = require('!!svg-inline-loader!../../assets/icons/trigger.svg');
    trophy: string = require('!!svg-inline-loader!../../assets/icons/trophy.svg');
    troubleshooting: string = require('!!svg-inline-loader!../../assets/icons/troubleshooting.svg');
    unlock: string = require('!!svg-inline-loader!../../assets/icons/unlock.svg');
    up: string = require('!!svg-inline-loader!../../assets/icons/up.svg');
    update: string = require('!!svg-inline-loader!../../assets/icons/update.svg');
    upgrade: string = require('!!svg-inline-loader!../../assets/icons/upgrade.svg');
    upload: string = require('!!svg-inline-loader!../../assets/icons/upload.svg');
    userAdd: string = require('!!svg-inline-loader!../../assets/icons/user-add.svg');
    userAdmin: string = require('!!svg-inline-loader!../../assets/icons/user-admin.svg');
    userExpert: string = require('!!svg-inline-loader!../../assets/icons/user-expert.svg');
    userFemale: string = require('!!svg-inline-loader!../../assets/icons/user-female.svg');
    userManager: string = require('!!svg-inline-loader!../../assets/icons/user-manager.svg');
    userNew: string = require('!!svg-inline-loader!../../assets/icons/user-new.svg');
    userPolice: string = require('!!svg-inline-loader!../../assets/icons/user-police.svg');
    userSettings: string = require('!!svg-inline-loader!../../assets/icons/user-settings.svg');
    userWorker: string = require('!!svg-inline-loader!../../assets/icons/user-worker.svg');
    user: string = require('!!svg-inline-loader!../../assets/icons/user.svg');
    validation: string = require('!!svg-inline-loader!../../assets/icons/validation.svg');
    video: string = require('!!svg-inline-loader!../../assets/icons/video.svg');
    view: string = require('!!svg-inline-loader!../../assets/icons/view.svg');
    virtualMachine: string = require('!!svg-inline-loader!../../assets/icons/virtual-machine.svg');
    vmMaintenance: string = require('!!svg-inline-loader!../../assets/icons/vm-maintenance.svg');
    volumeLow: string = require('!!svg-inline-loader!../../assets/icons/volume-low.svg');
    volumeMute: string = require('!!svg-inline-loader!../../assets/icons/volume-mute.svg');
    volume: string = require('!!svg-inline-loader!../../assets/icons/volume.svg');
    vulnerability: string = require('!!svg-inline-loader!../../assets/icons/vulnerability.svg');
    waypoint: string = require('!!svg-inline-loader!../../assets/icons/waypoint.svg');
    workshop: string = require('!!svg-inline-loader!../../assets/icons/workshop.svg');
    zoomIn: string = require('!!svg-inline-loader!../../assets/icons/zoom-in.svg');
}