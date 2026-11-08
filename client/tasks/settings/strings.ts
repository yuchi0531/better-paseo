import type { CardField, Density, DoneWindow, LabelLimit, LaneWidth, SidebarCount } from "../../../shared/tasks-settings";
import type { CardTitleLineCount } from "../device-store";
import type { TasksLanguage } from "../i18n";

/** The words of the Tasks board's half of the settings page. */
export interface TasksSettingsStrings {
  loading: string;
  error: (message: string) => string;
  invalid: (message: string) => string;
  saving: string;
  saveError: (message: string) => string;
  conflict: string;
  enabled: string;
  /** One line: what turning it on adds. */
  enabledHint: string;
  /** After the switch went on: where the entry appeared. */
  enabledConfirm: string;
  enabledConfirmHint: string;
  openBoard: string;
  openShortcut: string;
  shortcutHint: string;
  shortcutRecord: string;
  shortcutRecording: string;
  shortcutClear: string;
  shortcutDefault: string;
  shortcutNone: string;
  previewTitle: string;
  previewOffHint: string;
  previewOnHint: string;
  /** The off preview's tag: what it is a preview of. */
  previewOffTag: string;
  previewLanes: string;
  density: string;
  densityHint: string;
  densities: Record<Density, string>;
  cardTitle: string;
  fieldsTitle: string;
  fieldsHint: string;
  fields: Record<CardField, string>;
  moduleReset: (module: string) => string;
  moduleResetHint: string;
  moduleResetAction: (module: string) => string;
  moduleResetConfirm: (module: string) => string;
  moduleResetConfirmHint: string;
  labelLimit: string;
  labelLimits: Record<LabelLimit, string>;
  titleLines: string;
  titleLinesHint: string;
  titleLineCounts: Record<CardTitleLineCount, string>;
  compactCards: string;
  compactCardsHint: string;
  boardTitle: string;
  doneWindow: string;
  doneWindows: Record<DoneWindow, string>;
  showSubtasks: string;
  showSubtasksHint: string;
  showSubtasksTips: ReadonlyArray<{ label: string; text: string }>;
  showArchived: string;
  showArchivedHint: string;
  showEmptyGroups: string;
  showEmptyGroupsHint: string;
  showEmptyGroupsTips: ReadonlyArray<{ label: string; text: string }>;
  laneWidth: string;
  /** Says the phone ignores it: there one lane fills the screen. */
  laneWidthHint: string;
  laneWidths: Record<LaneWidth, string>;
  sidebarTitle: string;
  sidebarCount: string;
  sidebarCounts: Record<SidebarCount, string>;
  resetTitle: string;
  reset: string;
  resetHint: string;
  resetAction: string;
  resetConfirm: string;
  resetConfirmHint: string;
  resetCancel: string;
  /** The cancel row's own label, so it does not repeat its button's "Cancel". */
  resetKeep: string;
  resetInvalidHint: string;
}

export const TASKS_SETTINGS_STRINGS: Readonly<Record<TasksLanguage, TasksSettingsStrings>> = {
  en: {
    loading: "Loading the Tasks settings…",
    error: (message) => `The Tasks settings could not be loaded: ${message}`,
    invalid: (message) => `The saved Tasks settings are unusable: ${message}`,
    saving: "Saving…",
    saveError: (message) => `Could not save: ${message}`,
    conflict: "Settings changed elsewhere; reloaded the latest.",
    enabled: "Enable the Tasks board",
    enabledHint: "Adds Tasks to the sidebar: every task on this host, in lanes by status.",
    enabledConfirm: "Tasks is now at the top of the sidebar.",
    enabledConfirmHint: "Leave Settings to see it, or open the board from here.",
    openBoard: "Open board",
    openShortcut: "Quickly open the Tasks board",
    shortcutHint: "Works while Paseo is focused and Tasks is enabled. Saved on this device only. Choose a combination not used by Paseo or your system.",
    shortcutRecord: "Change shortcut",
    shortcutRecording: "Press a key with Command, Ctrl or Option / Alt. Escape cancels.",
    shortcutClear: "Clear shortcut",
    shortcutDefault: "Restore default shortcut",
    shortcutNone: "Not assigned",
    previewTitle: "Preview",
    previewOffHint: "What the board looks like once it is on: sample tasks, drawn with the options below.",
    previewOnHint: "Sample tasks, drawn with the options below as you change them.",
    previewOffTag: "Sample",
    previewLanes: "Lane",
    density: "Card density",
    densityHint: "Presets set card fields and the label limit.",
    densities: { minimal: "Minimal", standard: "Standard", full: "Full", custom: "Custom" },
    cardTitle: "Cards",
    fieldsTitle: "Fields",
    fieldsHint: "What each card shows. Phones keep the essentials whatever is picked here.",
    moduleReset: (module) => `Reset ${module} settings`,
    moduleResetHint: "Only settings in this section will be restored.",
    moduleResetAction: (module) => `Reset ${module}`,
    moduleResetConfirm: (module) => `Confirm reset ${module}`,
    moduleResetConfirmHint: "This restores only this section's settings to their defaults.",
    fields: {
      provider: "Agent brand mark",
      model: "Model",
      thinking: "Thinking level",
      project: "Project",
      projectIcon: "Project icon",
      workspace: "Workspace name",
      branch: "Branch",
      gitStatus: "Git status",
      folder: "Folder",
      path: "Full path",
      labels: "Labels",
      pullRequest: "Linked PR",
      timer: "Timer / finished at",
      context: "Context usage ring",
      subtasks: "Subtask summary",
    },
    labelLimit: "Labels shown",
    labelLimits: { "1": "1", "2": "2", "3": "3", all: "All" },
    titleLines: "Title lines",
    titleLinesHint: "Saved on this device only.",
    titleLineCounts: { "1": "1", "2": "2", "3": "3", "4": "4", "all": "All" },
    compactCards: "Use minimal cards on phones",
    compactCardsHint: "Phones draw the Minimal card whatever the density above.",
    boardTitle: "Board",
    doneWindow: "Done lane window",
    doneWindows: { "24h": "Last 24 hours", "7d": "Last 7 days", all: "All" },
    showSubtasks: "Show subtasks",
    showSubtasksTips: [{ label: "Visibility", text: "When off, running, waiting and failed subtasks still show in their lane, unless their parent’s card is there too." }, { label: "Storage", text: "Saved on this device only." }],
    showSubtasksHint: "When off, running, waiting and failed subtasks still show in their lane, unless their parent's card is there too. Saved on this device only.",
    showArchived: "Show the archived lane",
    showArchivedHint: "Saved on this device only. A lane after Done with archived tasks and those of archived workspaces, in the same time window.",
    showEmptyGroups: "Show all",
    showEmptyGroupsTips: [{ label: "Visibility", text: "The filters and the sidebar list every Agent, project, workspace and label in Paseo, with 0 where the board has none, including Done and Archived." }, { label: "Storage", text: "Saved on this device only." }],
    showEmptyGroupsHint: "The filters and the sidebar list every Agent, project, workspace and label in Paseo, with 0 where the board has none, including Done and Archived. Saved on this device only.",
    laneWidth: "Lane width",
    laneWidthHint: "Saved on this device only. On desktop, web and tablets. Phones show one lane at a time.",
    laneWidths: { narrow: "Narrow", default: "Default", wide: "Wide" },
    sidebarTitle: "Sidebar",
    sidebarCount: "Sidebar entry count",
    sidebarCounts: { all: "Waiting · Running · Review", "input-only": "Waiting only", none: "Hidden" },
    resetTitle: "Reset",
    reset: "Restore the Tasks defaults",
    resetHint: "Restore card, board and sidebar options. The board switch and automatic titles are unchanged.",
    resetAction: "Restore",
    resetConfirm: "Restore now",
    resetConfirmHint: "This restores card, board and sidebar options to their defaults.",
    resetCancel: "Cancel",
    resetKeep: "Keep the current options",
    resetInvalidHint: "Restoring the defaults replaces the unusable record.",
  },
  zh: {
    loading: "正在加载任务看板设置…",
    error: (message) => `任务看板设置加载失败：${message}`,
    invalid: (message) => `已保存的任务看板设置无法使用：${message}`,
    saving: "正在保存…",
    saveError: (message) => `保存失败：${message}`,
    conflict: "设置已在别处更改，已重新载入最新内容。",
    enabled: "启用任务看板",
    enabledHint: "在侧边栏加入「任务」，把这台主机上的所有任务按状态分泳道排列。",
    enabledConfirm: "「任务」已加入侧边栏顶部。",
    enabledConfirmHint: "退出设置即可看到，也可以直接从这里打开看板。",
    openBoard: "打开看板",
    openShortcut: "快速打开任务面板",
    shortcutHint: "Paseo 窗口有焦点且任务看板启用时生效，仅保存在当前设备。请选择未被 Paseo 或系统占用的组合键。",
    shortcutRecord: "修改快捷键",
    shortcutRecording: "请按下包含 Command、Ctrl 或 Option / Alt 的组合键；Esc 取消。",
    shortcutClear: "清除快捷键",
    shortcutDefault: "恢复默认快捷键",
    shortcutNone: "未设置",
    previewTitle: "实时预览",
    previewOffHint: "开启后看板就是这个样子：示例任务，按下面的选项绘制。",
    previewOnHint: "示例任务，随下面的选项实时变化。",
    previewOffTag: "示例",
    previewLanes: "泳道",
    density: "卡片信息密度",
    densityHint: "预设卡片字段和标签数量。",
    densities: { minimal: "精简", standard: "标准", full: "完整", custom: "自定义" },
    cardTitle: "卡片",
    fieldsTitle: "显示字段",
    fieldsHint: "每张卡片显示哪些信息。手机上始终保留最关键的几项。",
    moduleReset: (module) => `恢复「${module}」默认设置`,
    moduleResetHint: "只恢复本组设置，不影响其他组。",
    moduleResetAction: (module) => `恢复${module}`,
    moduleResetConfirm: (module) => `确认恢复${module}`,
    moduleResetConfirmHint: "这只会把本组设置恢复为默认值。",
    fields: {
      provider: "Agent 品牌标识",
      model: "模型",
      thinking: "思考等级",
      project: "项目",
      projectIcon: "项目图标",
      workspace: "工作区名称",
      branch: "分支",
      gitStatus: "Git 状态",
      folder: "文件夹",
      path: "完整路径",
      labels: "标签",
      pullRequest: "关联 PR",
      timer: "计时 / 完成于",
      context: "上下文占用环",
      subtasks: "子任务摘要",
    },
    labelLimit: "标签数量",
    labelLimits: { "1": "1 个", "2": "2 个", "3": "3 个", all: "全部" },
    titleLines: "标题行数",
    titleLinesHint: "仅保存在当前设备。",
    titleLineCounts: { "1": "1 行", "2": "2 行", "3": "3 行", "4": "4 行", "all": "全部" },
    compactCards: "手机上使用精简卡片",
    compactCardsHint: "手机上无论上面选哪种密度，都按精简卡片显示。",
    boardTitle: "看板",
    doneWindow: "已完成默认时间窗口",
    doneWindows: { "24h": "近 24 小时", "7d": "近 7 天", all: "全部" },
    showSubtasks: "显示子任务",
    showSubtasksTips: [{ label: "显示范围", text: "关闭后，运行中、待输入和失败的子任务仍会显示，除非父任务在同一泳道。" }, { label: "保存位置", text: "仅保存在当前设备。" }],
    showSubtasksHint: "关闭后，运行中、待输入和失败的子任务仍会显示，除非父任务在同一泳道。仅保存在当前设备。",
    showArchived: "显示已归档泳道",
    showArchivedHint: "在已完成之后显示归档任务，时间窗口与已完成相同。仅保存在当前设备。",
    showEmptyGroups: "显示全部",
    showEmptyGroupsTips: [{ label: "显示范围", text: "筛选菜单和侧栏也显示看板上没有任务的 Agent、项目、工作区和标签，已完成和已归档计入。" }, { label: "保存位置", text: "仅保存在当前设备。" }],
    showEmptyGroupsHint: "筛选菜单和侧栏也显示看板上没有任务的 Agent、项目、工作区和标签，已完成和已归档计入。仅保存在当前设备。",
    laneWidth: "泳道宽度",
    laneWidthHint: "用于桌面和非手机布局；仅保存在当前设备。",
    laneWidths: { narrow: "紧凑", default: "默认", wide: "宽松" },
    sidebarTitle: "侧边栏",
    sidebarCount: "侧边栏入口计数",
    sidebarCounts: { all: "待输入 · 运行中 · 待查看", "input-only": "只显示待输入", none: "不显示" },
    resetTitle: "恢复",
    reset: "恢复任务看板默认设置",
    resetHint: "恢复卡片、看板和侧栏选项；看板开关和自动标题设置不变。",
    resetAction: "恢复",
    resetConfirm: "确认恢复",
    resetConfirmHint: "这会把卡片、看板和侧栏选项恢复为默认值。",
    resetCancel: "取消",
    resetKeep: "保留当前选项",
    resetInvalidHint: "恢复默认设置会替换无法使用的记录。",
  },
  ja: {
  loading: "Tasks 設定を読み込んでいます…",
  error: (message) => `Tasks 設定を読み込めませんでした: ${message}`,
  invalid: (message) => `保存された Tasks 設定は使用できません: ${message}`,
  saving: "保存中…",
  saveError: (message) => `保存できませんでした: ${message}`,
  conflict: "設定が別の場所で変更されたため、最新の設定を再読み込みしました。",
  enabled: "Tasks ボードを有効にする",
  enabledHint: "サイドバーに Tasks を追加します: このホスト上のすべての Task を、ステータス別のレーンで表示します。",
  enabledConfirm: "Tasks がサイドバーの先頭に表示されるようになりました。",
  enabledConfirmHint: "設定を閉じると表示されます。ここからボードを開くこともできます。",
  openBoard: "ボードを開く",
  openShortcut: "Tasks ボードをすばやく開く",
  shortcutHint: "Paseo にフォーカスがあり、Tasks が有効なときに機能します。このデバイスにのみ保存されます。Paseo やシステムで使われていない組み合わせを選んでください。",
  shortcutRecord: "ショートカットを変更",
  shortcutRecording: "Command、Ctrl、または Option / Alt を押しながらキーを押してください。Escape でキャンセルします。",
  shortcutClear: "ショートカットをクリア",
  shortcutDefault: "既定のショートカットに戻す",
  shortcutNone: "未割り当て",
  previewTitle: "プレビュー",
  previewOffHint: "有効にしたときのボードの見た目です: 下のオプションで描画されたサンプル Task です。",
  previewOnHint: "下のオプションを変更すると、その設定で描画されるサンプル Task です。",
  previewOffTag: "サンプル",
  previewLanes: "レーン",
  density: "カードの密度",
  densityHint: "プリセットはカードのフィールドとラベルの上限を設定します。",
  densities: { minimal: "最小", standard: "標準", full: "フル", custom: "カスタム" },
  cardTitle: "カード",
  fieldsTitle: "フィールド",
  fieldsHint: "各カードに表示する内容です。スマートフォンでは、ここで何を選んでも必要な項目だけが表示されます。",
  moduleReset: (module) => `${module} 設定をリセット`,
  moduleResetHint: "このセクションの設定だけが復元されます。",
  moduleResetAction: (module) => `${module} をリセット`,
  moduleResetConfirm: (module) => `${module} のリセットを確認`,
  moduleResetConfirmHint: "このセクションの設定だけを既定値に戻します。",
  fields: {
    provider: "Agent のブランドマーク",
    model: "Model",
    thinking: "思考レベル",
    project: "プロジェクト",
    projectIcon: "プロジェクトアイコン",
    workspace: "Workspace 名",
    branch: "Branch",
    gitStatus: "Git ステータス",
    folder: "フォルダ",
    path: "フルパス",
    labels: "ラベル",
    pullRequest: "リンクされた PR",
    timer: "タイマー / 完了日時",
    context: "Context 使用量リング",
    subtasks: "サブタスクの概要",
  },
  labelLimit: "表示するラベル数",
  labelLimits: { "1": "1", "2": "2", "3": "3", all: "すべて" },
  titleLines: "タイトル行数",
  titleLinesHint: "このデバイスにのみ保存されます。",
  titleLineCounts: { "1": "1", "2": "2", "3": "3", "4": "4", all: "すべて" },
  compactCards: "スマートフォンでは最小カードを使用",
  compactCardsHint: "スマートフォンでは、上の密度に関係なく最小カードで描画されます。",
  boardTitle: "ボード",
  doneWindow: "完了レーンの表示期間",
  doneWindows: { "24h": "過去 24 時間", "7d": "過去 7 日間", all: "すべて" },
  showSubtasks: "サブタスクを表示",
  showSubtasksTips: [{ label: "表示", text: "オフでも、実行中、待機中、失敗したサブタスクは、親のカードもそこにある場合を除き、それぞれのレーンに表示されます。" }, { label: "保存", text: "このデバイスにのみ保存されます。" }],
  showSubtasksHint: "オフでも、実行中、待機中、失敗したサブタスクは、親のカードもそこにある場合を除き、それぞれのレーンに表示されます。このデバイスにのみ保存されます。",
  showArchived: "アーカイブ済みレーンを表示",
  showArchivedHint: "このデバイスにのみ保存されます。完了の後に、同じ表示期間で、アーカイブ済みの Task とアーカイブ済み Workspace の Task を表示するレーンを追加します。",
  showEmptyGroups: "すべて表示",
  showEmptyGroupsTips: [{ label: "表示", text: "フィルターとサイドバーには、Paseo 内のすべての Agent、プロジェクト、workspace、ラベルが表示され、ボードに存在しないものは 0 として表示されます（完了とアーカイブ済みを含む）。" }, { label: "保存", text: "このデバイスにのみ保存されます。" }],
  showEmptyGroupsHint: "フィルターとサイドバーには、Paseo 内のすべての Agent、プロジェクト、workspace、ラベルが表示され、ボードに存在しないものは 0 として表示されます（完了とアーカイブ済みを含む）。このデバイスにのみ保存されます。",
  laneWidth: "レーン幅",
  laneWidthHint: "このデバイスにのみ保存されます。デスクトップ、Web、タブレットで適用されます。スマートフォンでは一度に 1 つのレーンが表示されます。",
  laneWidths: { narrow: "狭い", default: "既定", wide: "広い" },
  sidebarTitle: "サイドバー",
  sidebarCount: "サイドバー項目の件数",
  sidebarCounts: { all: "待機 · 実行中 · レビュー", "input-only": "待機のみ", none: "非表示" },
  resetTitle: "リセット",
  reset: "Tasks の既定値に戻す",
  resetHint: "カード、ボード、サイドバーのオプションを既定値に戻します。ボードのスイッチと自動タイトルは変更されません。",
  resetAction: "復元",
  resetConfirm: "今すぐ復元",
  resetConfirmHint: "カード、ボード、サイドバーのオプションを既定値に戻します。",
  resetCancel: "キャンセル",
  resetKeep: "現在のオプションを維持",
  resetInvalidHint: "既定値を復元すると、使用できないレコードが置き換えられます。",
},
};
