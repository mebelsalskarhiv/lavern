/**
 * i18n — Internationalization module for Lavern UI
 * Russian translation for all user-facing strings
 */

export type TranslationKey = 
  // Common
  | 'loading'
  | 'error'
  | 'success'
  | 'cancel'
  | 'save'
  | 'delete'
  | 'confirm'
  | 'back'
  | 'next'
  | 'finish'
  | 'retry'
  | 'close'
  | 'search'
  | 'filter'
  | 'sort'
  | 'ascending'
  | 'descending'
  | 'yes'
  | 'no'
  | 'ok'
  
  // Auth
  | 'sign_in'
  | 'sign_out'
  | 'sign_up'
  | 'login_title'
  | 'login_subtitle'
  | 'email_label'
  | 'password_label'
  | 'forgot_password'
  | 'reset_password'
  | 'remember_me'
  | 'no_account'
  | 'have_account'
  | 'google_signin'
  | 'logout_confirm'
  | 'verify_email'
  | 'email_verified'
  | 'verification_failed'
  
  // Navigation
  | 'nav_dashboard'
  | 'nav_my_cases'
  | 'nav_my_page'
  | 'nav_settings'
  | 'nav_help'
  | 'nav_docs'
  | 'nav_claw'
  | 'nav_archive'
  
  // Landing
  | 'landing_title'
  | 'landing_subtitle'
  | 'landing_begin'
  | 'landing_quickstart'
  | 'landing_demo'
  | 'landing_features'
  | 'landing_trust'
  
  // Dashboard / Lobby
  | 'dashboard_title'
  | 'dashboard_welcome'
  | 'dashboard_new_case'
  | 'dashboard_continue'
  | 'dashboard_recent'
  | 'dashboard_no_cases'
  
  // Intake
  | 'intake_title'
  | 'intake_subtitle'
  | 'intake_client_name'
  | 'intake_matter_title'
  | 'intake_matter_type'
  | 'intake_jurisdiction'
  | 'intake_conflict_check'
  | 'intake_kyc'
  | 'intake_engagement_letter'
  
  // Briefing
  | 'briefing_title'
  | 'briefing_subtitle'
  | 'briefing_upload_docs'
  | 'briefing_describe_case'
  | 'briefing_questions'
  | 'briefing_context'
  | 'briefing_objectives'
  | 'briefing_deadline'
  | 'briefing_budget'
  
  // Staffing / Team
  | 'staffing_title'
  | 'staffing_subtitle'
  | 'staffing_select_team'
  | 'staffing_workflow'
  | 'staffing_intensity'
  | 'staffing_leader'
  | 'staffing_agents'
  | 'staffing_custom'
  | 'staffing_auto'
  
  // Working
  | 'working_title'
  | 'working_analyzing'
  | 'working_debating'
  | 'working_verifying'
  | 'working_waiting'
  | 'working_agents_active'
  | 'working_progress'
  | 'working_timeline'
  | 'working_findings'
  
  // Delivery
  | 'delivery_title'
  | 'delivery_summary'
  | 'delivery_findings'
  | 'delivery_risks'
  | 'delivery_recommendations'
  | 'delivery_download'
  | 'delivery_share'
  | 'delivery_export'
  | 'delivery_confidence'
  | 'delivery_audit'
  
  // Verification
  | 'verification_title'
  | 'verification_pass'
  | 'verification_finding'
  | 'verification_verdict'
  | 'verification_approved'
  | 'verification_rejected'
  | 'verification_pending'
  
  // Gate Dialog
  | 'gate_title'
  | 'gate_review_required'
  | 'gate_approve'
  | 'gate_reject'
  | 'gate_comment'
  
  // My Cases
  | 'cases_title'
  | 'cases_active'
  | 'cases_completed'
  | 'cases_archived'
  | 'cases_no_results'
  | 'cases_created'
  | 'cases_status'
  
  // My Page / Profile
  | 'profile_title'
  | 'profile_name'
  | 'profile_email'
  | 'profile_company'
  | 'profile_role'
  | 'profile_preferences'
  | 'profile_notifications'
  | 'profile_language'
  | 'profile_theme'
  
  // Claw (Autonomous Monitoring)
  | 'claw_title'
  | 'claw_monitoring'
  | 'claw_documents'
  | 'claw_alerts'
  | 'claw_digest'
  | 'claw_start'
  | 'claw_pause'
  | 'claw_resume'
  | 'claw_stop'
  
  // Agent Builder
  | 'agent_builder_title'
  | 'agent_builder_create'
  | 'agent_builder_name'
  | 'agent_builder_role'
  | 'agent_builder_capabilities'
  | 'agent_builder_save'
  | 'agent_builder_share'
  
  // Demo
  | 'demo_title'
  | 'demo_tour'
  | 'demo_skip'
  | 'demo_next'
  | 'demo_prev'
  
  // Errors
  | 'error_network'
  | 'error_auth'
  | 'error_session'
  | 'error_upload'
  | 'error_api'
  | 'error_timeout'
  | 'error_unknown'
  
  // Messages
  | 'msg_welcome'
  | 'msg_goodbye'
  | 'msg_saved'
  | 'msg_deleted'
  | 'msg_uploaded'
  | 'msg_processing'
  | 'msg_complete'
  | 'msg_error'
  
  // File Upload
  | 'upload_title'
  | 'upload_drop'
  | 'upload_browse'
  | 'upload_supported'
  | 'upload_max_size'
  | 'upload_success'
  | 'upload_failed'
  
  // Search & Filter
  | 'search_placeholder'
  | 'filter_all'
  | 'filter_active'
  | 'filter_completed'
  | 'filter_archived'
  
  // Time & Dates
  | 'time_just_now'
  | 'time_minutes_ago'
  | 'time_hours_ago'
  | 'time_days_ago'
  | 'time_weeks_ago'
  | 'time_months_ago'
  
  // Confidence Levels
  | 'confidence_high'
  | 'confidence_medium'
  | 'confidence_low'
  | 'confidence_very_high'
  | 'confidence_very_low'
  
  // Workflow Types
  | 'workflow_counsel'
  | 'workflow_review'
  | 'workflow_adversarial'
  | 'workflow_roundtable'
  | 'workflow_legal_design'
  | 'workflow_full_bench'
  | 'workflow_verification'
  
  // Intensity Levels
  | 'intensity_light'
  | 'intensity_standard'
  | 'intensity_deep'
  | 'intensity_exhaustive'
  
  // YOLO Quick Start
  | 'yolo_title'
  | 'yolo_subtitle'
  | 'yolo_question'
  | 'yolo_tier_fast'
  | 'yolo_tier_standard'
  | 'yolo_tier_deep'
  | 'yolo_launch'
  
  // Sidebar
  | 'sidebar_home'
  | 'sidebar_cases'
  | 'sidebar_profile'
  | 'sidebar_settings'
  | 'sidebar_logout'
  | 'sidebar_agents'
  
  // Status
  | 'status_idle'
  | 'status_active'
  | 'status_working'
  | 'status_talking'
  
  // Offline Banner
  | 'offline_title'
  | 'offline_message'
  | 'offline_retry'
  
  // Queue Banner
  | 'queue_title'
  | 'queue_position'
  | 'queue_wait'
  
  // Debate Log
  | 'debate_title'
  | 'debate_log'
  | 'debate_disagreement'
  | 'debate_resolution'
  
  // Timeline
  | 'timeline_started'
  | 'timeline_briefing'
  | 'timeline_staffing'
  | 'timeline_working'
  | 'timeline_verification'
  | 'timeline_delivery'
  | 'timeline_completed'
  
  // Session List
  | 'session_list_title'
  | 'session_list_empty'
  | 'session_list_load_more'
  
  // Controls
  | 'controls_play'
  | 'controls_pause'
  | 'controls_stop'
  | 'controls_restart'
  
  // Legal
  | 'legal_title'
  | 'legal_terms'
  | 'legal_privacy'
  | 'legal_disclaimer'
  
  // Partner
  | 'partner_title'
  | 'partner_consult'
  | 'partner_request'
  
  // Archive
  | 'archive_title'
  | 'archive_restore'
  | 'archive_permanent_delete'
  
  // Dispatch
  | 'dispatch_title'
  | 'dispatch_pending'
  | 'dispatch_assigned'
  
  // Ralph Loop
  | 'ralph_title'
  | 'ralph_quote'
  
  // Challenge
  | 'challenge_title'
  | 'challenge_compare'
  | 'challenge_submit'
  
  // Showcase
  | 'showcase_title'
  | 'showcase_examples'
  
  // Misc
  | 'misc_version'
  | 'misc_build'
  | 'misc_uptime'
  | 'misc_performance'
  | 'misc_feedback'
  | 'misc_report_issue';

export interface Translation {
  [key: string]: string;
}

export const translations: Record<'en' | 'ru', Translation> = {
  en: {
    // Common
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    cancel: 'Cancel',
    save: 'Save',
    delete: 'Delete',
    confirm: 'Confirm',
    back: 'Back',
    next: 'Next',
    finish: 'Finish',
    retry: 'Retry',
    close: 'Close',
    search: 'Search',
    filter: 'Filter',
    sort: 'Sort',
    ascending: 'Ascending',
    descending: 'Descending',
    yes: 'Yes',
    no: 'No',
    ok: 'OK',
    
    // Auth
    sign_in: 'Sign In',
    sign_out: 'Sign Out',
    sign_up: 'Sign Up',
    login_title: 'Welcome Back',
    login_subtitle: 'Sign in to continue to Lavern',
    email_label: 'Email',
    password_label: 'Password',
    forgot_password: 'Forgot Password?',
    reset_password: 'Reset Password',
    remember_me: 'Remember Me',
    no_account: "Don't have an account?",
    have_account: 'Already have an account?',
    google_signin: 'Sign in with Google',
    logout_confirm: 'Are you sure you want to sign out?',
    verify_email: 'Verifying your email...',
    email_verified: 'Email verified! You can now sign in.',
    verification_failed: 'Verification failed.',
    
    // Navigation
    nav_dashboard: 'Dashboard',
    nav_my_cases: 'My Cases',
    nav_my_page: 'Profile',
    nav_settings: 'Settings',
    nav_help: 'Help',
    nav_docs: 'Documentation',
    nav_claw: 'Clawern',
    nav_archive: 'Archive',
    
    // Landing
    landing_title: 'Lavern',
    landing_subtitle: 'Multi-Agent Legal Analysis System',
    landing_begin: 'Begin Engagement',
    landing_quickstart: 'Quick Start',
    landing_demo: 'Demo Tour',
    landing_features: 'Features',
    landing_trust: 'Trusted by legal professionals',
    
    // Dashboard / Lobby
    dashboard_title: 'Dashboard',
    dashboard_welcome: 'Welcome back',
    dashboard_new_case: 'New Case',
    dashboard_continue: 'Continue',
    dashboard_recent: 'Recent Cases',
    dashboard_no_cases: 'No cases yet',
    
    // Intake
    intake_title: 'Client Intake',
    intake_subtitle: 'Let\'s start with some basic information',
    intake_client_name: 'Client Name',
    intake_matter_title: 'Matter Title',
    intake_matter_type: 'Matter Type',
    intake_jurisdiction: 'Jurisdiction',
    intake_conflict_check: 'Conflict Check',
    intake_kyc: 'KYC Verification',
    intake_engagement_letter: 'Engagement Letter',
    
    // Briefing
    briefing_title: 'Case Briefing',
    briefing_subtitle: 'Upload documents and describe your case',
    briefing_upload_docs: 'Upload Documents',
    briefing_describe_case: 'Describe Your Case',
    briefing_questions: 'Key Questions',
    briefing_context: 'Context',
    briefing_objectives: 'Objectives',
    briefing_deadline: 'Deadline',
    briefing_budget: 'Budget',
    
    // Staffing / Team
    staffing_title: 'Team Selection',
    staffing_subtitle: 'Choose your team of AI agents',
    staffing_select_team: 'Select Team',
    staffing_workflow: 'Workflow',
    staffing_intensity: 'Intensity',
    staffing_leader: 'Team Leader',
    staffing_agents: 'Agents',
    staffing_custom: 'Custom',
    staffing_auto: 'Auto-Select',
    
    // Working
    working_title: 'Working',
    working_analyzing: 'Analyzing...',
    working_debating: 'Debating',
    working_verifying: 'Verifying',
    working_waiting: 'Waiting',
    working_agents_active: 'Agents Active',
    working_progress: 'Progress',
    working_timeline: 'Timeline',
    working_findings: 'Findings',
    
    // Delivery
    delivery_title: 'Delivery',
    delivery_summary: 'Summary',
    delivery_findings: 'Findings',
    delivery_risks: 'Risks',
    delivery_recommendations: 'Recommendations',
    delivery_download: 'Download',
    delivery_share: 'Share',
    delivery_export: 'Export',
    delivery_confidence: 'Confidence',
    delivery_audit: 'Audit Trail',
    
    // Verification
    verification_title: 'Verification',
    verification_pass: 'Pass',
    verification_finding: 'Finding',
    verification_verdict: 'Verdict',
    verification_approved: 'Approved',
    verification_rejected: 'Rejected',
    verification_pending: 'Pending',
    
    // Gate Dialog
    gate_title: 'Review Required',
    gate_review_required: 'Human review required',
    gate_approve: 'Approve',
    gate_reject: 'Reject',
    gate_comment: 'Comment',
    
    // My Cases
    cases_title: 'My Cases',
    cases_active: 'Active',
    cases_completed: 'Completed',
    cases_archived: 'Archived',
    cases_no_results: 'No results found',
    cases_created: 'Created',
    cases_status: 'Status',
    
    // My Page / Profile
    profile_title: 'Profile',
    profile_name: 'Name',
    profile_email: 'Email',
    profile_company: 'Company',
    profile_role: 'Role',
    profile_preferences: 'Preferences',
    profile_notifications: 'Notifications',
    profile_language: 'Language',
    profile_theme: 'Theme',
    
    // Claw (Autonomous Monitoring)
    claw_title: 'Clawern',
    claw_monitoring: 'Monitoring',
    claw_documents: 'Documents',
    claw_alerts: 'Alerts',
    claw_digest: 'Digest',
    claw_start: 'Start',
    claw_pause: 'Pause',
    claw_resume: 'Resume',
    claw_stop: 'Stop',
    
    // Agent Builder
    agent_builder_title: 'Agent Builder',
    agent_builder_create: 'Create Agent',
    agent_builder_name: 'Name',
    agent_builder_role: 'Role',
    agent_builder_capabilities: 'Capabilities',
    agent_builder_save: 'Save',
    agent_builder_share: 'Share',
    
    // Demo
    demo_title: 'Demo Tour',
    demo_tour: 'Take a tour',
    demo_skip: 'Skip',
    demo_next: 'Next',
    demo_prev: 'Previous',
    
    // Errors
    error_network: 'Network error. Please check your connection.',
    error_auth: 'Authentication failed. Please sign in again.',
    error_session: 'Session expired. Please refresh the page.',
    error_upload: 'Upload failed. Please try again.',
    error_api: 'API error. Please try again later.',
    error_timeout: 'Request timed out. Please try again.',
    error_unknown: 'Something went wrong. Please try again.',
    
    // Messages
    msg_welcome: 'Welcome!',
    msg_goodbye: 'Goodbye!',
    msg_saved: 'Saved successfully',
    msg_deleted: 'Deleted successfully',
    msg_uploaded: 'Uploaded successfully',
    msg_processing: 'Processing...',
    msg_complete: 'Complete',
    msg_error: 'An error occurred',
    
    // File Upload
    upload_title: 'Upload Files',
    upload_drop: 'Drop files here or click to browse',
    upload_browse: 'Browse Files',
    upload_supported: 'Supported formats: PDF, DOCX, TXT',
    upload_max_size: 'Maximum file size: 10MB',
    upload_success: 'Upload successful',
    upload_failed: 'Upload failed',
    
    // Search & Filter
    search_placeholder: 'Search...',
    filter_all: 'All',
    filter_active: 'Active',
    filter_completed: 'Completed',
    filter_archived: 'Archived',
    
    // Time & Dates
    time_just_now: 'Just now',
    time_minutes_ago: '{{count}} minutes ago',
    time_hours_ago: '{{count}} hours ago',
    time_days_ago: '{{count}} days ago',
    time_weeks_ago: '{{count}} weeks ago',
    time_months_ago: '{{count}} months ago',
    
    // Confidence Levels
    confidence_high: 'High',
    confidence_medium: 'Medium',
    confidence_low: 'Low',
    confidence_very_high: 'Very High',
    confidence_very_low: 'Very Low',
    
    // Workflow Types
    workflow_counsel: 'Counsel',
    workflow_review: 'Review',
    workflow_adversarial: 'Adversarial',
    workflow_roundtable: 'Roundtable',
    workflow_legal_design: 'Legal Design',
    workflow_full_bench: 'Full Bench',
    workflow_verification: 'Verification',
    
    // Intensity Levels
    intensity_light: 'Light',
    intensity_standard: 'Standard',
    intensity_deep: 'Deep',
    intensity_exhaustive: 'Exhaustive',
    
    // YOLO Quick Start
    yolo_title: 'Quick Start',
    yolo_subtitle: 'Ask a question and get instant analysis',
    yolo_question: 'Your Question',
    yolo_tier_fast: 'Fast (5 min)',
    yolo_tier_standard: 'Standard (15 min)',
    yolo_tier_deep: 'Deep (30 min)',
    yolo_launch: 'Launch',
    
    // Sidebar
    sidebar_home: 'Home',
    sidebar_cases: 'Cases',
    sidebar_profile: 'Profile',
    sidebar_settings: 'Settings',
    sidebar_logout: 'Logout',
    sidebar_agents: 'Agents',
    
    // Status
    status_idle: 'Idle',
    status_active: 'Active',
    status_working: 'Working',
    status_talking: 'Talking',
    
    // Offline Banner
    offline_title: 'You are offline',
    offline_message: 'Some features may not be available until you reconnect.',
    offline_retry: 'Retry',
    
    // Queue Banner
    queue_title: 'In Queue',
    queue_position: 'Position #{{position}}',
    queue_wait: 'Estimated wait time: {{time}}',
    
    // Debate Log
    debate_title: 'Debate',
    debate_log: 'Debate Log',
    debate_disagreement: 'Disagreement detected',
    debate_resolution: 'Resolution',
    
    // Timeline
    timeline_started: 'Started',
    timeline_briefing: 'Briefing',
    timeline_staffing: 'Staffing',
    timeline_working: 'Working',
    timeline_verification: 'Verification',
    timeline_delivery: 'Delivery',
    timeline_completed: 'Completed',
    
    // Session List
    session_list_title: 'Sessions',
    session_list_empty: 'No sessions',
    session_list_load_more: 'Load More',
    
    // Controls
    controls_play: 'Play',
    controls_pause: 'Pause',
    controls_stop: 'Stop',
    controls_restart: 'Restart',
    
    // Legal
    legal_title: 'Legal',
    legal_terms: 'Terms of Service',
    legal_privacy: 'Privacy Policy',
    legal_disclaimer: 'Disclaimer',
    
    // Partner
    partner_title: 'Partner',
    partner_consult: 'Consult Partner',
    partner_request: 'Request Review',
    
    // Archive
    archive_title: 'Archive',
    archive_restore: 'Restore',
    archive_permanent_delete: 'Permanently Delete',
    
    // Dispatch
    dispatch_title: 'Dispatch',
    dispatch_pending: 'Pending',
    dispatch_assigned: 'Assigned',
    
    // Ralph Loop
    ralph_title: 'Ralph',
    ralph_quote: 'Quote of the Day',
    
    // Challenge
    challenge_title: 'Challenge',
    challenge_compare: 'Compare',
    challenge_submit: 'Submit',
    
    // Showcase
    showcase_title: 'Showcase',
    showcase_examples: 'Examples',
    
    // Misc
    misc_version: 'Version',
    misc_build: 'Build',
    misc_uptime: 'Uptime',
    misc_performance: 'Performance',
    misc_feedback: 'Feedback',
    misc_report_issue: 'Report Issue',
  },
  
  ru: {
    // Common
    loading: 'Загрузка...',
    error: 'Ошибка',
    success: 'Успешно',
    cancel: 'Отмена',
    save: 'Сохранить',
    delete: 'Удалить',
    confirm: 'Подтвердить',
    back: 'Назад',
    next: 'Далее',
    finish: 'Завершить',
    retry: 'Повторить',
    close: 'Закрыть',
    search: 'Поиск',
    filter: 'Фильтр',
    sort: 'Сортировка',
    ascending: 'По возрастанию',
    descending: 'По убыванию',
    yes: 'Да',
    no: 'Нет',
    ok: 'ОК',
    
    // Auth
    sign_in: 'Войти',
    sign_out: 'Выйти',
    sign_up: 'Регистрация',
    login_title: 'С возвращением',
    login_subtitle: 'Войдите для продолжения работы с Lavern',
    email_label: 'Email',
    password_label: 'Пароль',
    forgot_password: 'Забыли пароль?',
    reset_password: 'Сброс пароля',
    remember_me: 'Запомнить меня',
    no_account: 'Нет аккаунта?',
    have_account: 'Уже есть аккаунт?',
    google_signin: 'Войти через Google',
    logout_confirm: 'Вы уверены, что хотите выйти?',
    verify_email: 'Проверка email...',
    email_verified: 'Email подтверждён! Теперь можно войти.',
    verification_failed: 'Проверка не удалась.',
    
    // Navigation
    nav_dashboard: 'Панель управления',
    nav_my_cases: 'Мои дела',
    nav_my_page: 'Профиль',
    nav_settings: 'Настройки',
    nav_help: 'Помощь',
    nav_docs: 'Документация',
    nav_claw: 'Clawern',
    nav_archive: 'Архив',
    
    // Landing
    landing_title: 'Lavern',
    landing_subtitle: 'Многоагентная система юридического анализа',
    landing_begin: 'Начать работу',
    landing_quickstart: 'Быстрый старт',
    landing_demo: 'Демо-тур',
    landing_features: 'Возможности',
    landing_trust: 'Доверяют юридические профессионалы',
    
    // Dashboard / Lobby
    dashboard_title: 'Панель управления',
    dashboard_welcome: 'С возвращением',
    dashboard_new_case: 'Новое дело',
    dashboard_continue: 'Продолжить',
    dashboard_recent: 'Недавние дела',
    dashboard_no_cases: 'Пока нет дел',
    
    // Intake
    intake_title: 'Первичный приём клиента',
    intake_subtitle: 'Начнём с основной информации',
    intake_client_name: 'Имя клиента',
    intake_matter_title: 'Название дела',
    intake_matter_type: 'Тип дела',
    intake_jurisdiction: 'Юрисдикция',
    intake_conflict_check: 'Проверка конфликта интересов',
    intake_kyc: 'KYC верификация',
    intake_engagement_letter: 'Договор на оказание услуг',
    
    // Briefing
    briefing_title: 'Брифинг по делу',
    briefing_subtitle: 'Загрузите документы и опишите ваше дело',
    briefing_upload_docs: 'Загрузить документы',
    briefing_describe_case: 'Опишите ваше дело',
    briefing_questions: 'Ключевые вопросы',
    briefing_context: 'Контекст',
    briefing_objectives: 'Цели',
    briefing_deadline: 'Срок исполнения',
    briefing_budget: 'Бюджет',
    
    // Staffing / Team
    staffing_title: 'Выбор команды',
    staffing_subtitle: 'Выберите команду ИИ-агентов',
    staffing_select_team: 'Выбрать команду',
    staffing_workflow: 'Рабочий процесс',
    staffing_intensity: 'Интенсивность',
    staffing_leader: 'Лидер команды',
    staffing_agents: 'Агенты',
    staffing_custom: 'Пользовательский',
    staffing_auto: 'Автовыбор',
    
    // Working
    working_title: 'В работе',
    working_analyzing: 'Анализ...',
    working_debating: 'Дебаты',
    working_verifying: 'Проверка',
    working_waiting: 'Ожидание',
    working_agents_active: 'Активных агентов',
    working_progress: 'Прогресс',
    working_timeline: 'Хронология',
    working_findings: 'Находки',
    
    // Delivery
    delivery_title: 'Результаты',
    delivery_summary: 'Резюме',
    delivery_findings: 'Находки',
    delivery_risks: 'Риски',
    delivery_recommendations: 'Рекомендации',
    delivery_download: 'Скачать',
    delivery_share: 'Поделиться',
    delivery_export: 'Экспорт',
    delivery_confidence: 'Уверенность',
    delivery_audit: 'Аудит',
    
    // Verification
    verification_title: 'Верификация',
    verification_pass: 'Проход',
    verification_finding: 'Находка',
    verification_verdict: 'Вердикт',
    verification_approved: 'Одобрено',
    verification_rejected: 'Отклонено',
    verification_pending: 'Ожидает',
    
    // Gate Dialog
    gate_title: 'Требуется проверка',
    gate_review_required: 'Требуется проверка человеком',
    gate_approve: 'Одобрить',
    gate_reject: 'Отклонить',
    gate_comment: 'Комментарий',
    
    // My Cases
    cases_title: 'Мои дела',
    cases_active: 'Активные',
    cases_completed: 'Завершённые',
    cases_archived: 'Архивированные',
    cases_no_results: 'Ничего не найдено',
    cases_created: 'Создано',
    cases_status: 'Статус',
    
    // My Page / Profile
    profile_title: 'Профиль',
    profile_name: 'Имя',
    profile_email: 'Email',
    profile_company: 'Компания',
    profile_role: 'Роль',
    profile_preferences: 'Предпочтения',
    profile_notifications: 'Уведомления',
    profile_language: 'Язык',
    profile_theme: 'Тема',
    
    // Claw (Autonomous Monitoring)
    claw_title: 'Clawern',
    claw_monitoring: 'Мониторинг',
    claw_documents: 'Документы',
    claw_alerts: 'Оповещения',
    claw_digest: 'Дайджест',
    claw_start: 'Запустить',
    claw_pause: 'Пауза',
    claw_resume: 'Возобновить',
    claw_stop: 'Остановить',
    
    // Agent Builder
    agent_builder_title: 'Конструктор агентов',
    agent_builder_create: 'Создать агента',
    agent_builder_name: 'Имя',
    agent_builder_role: 'Роль',
    agent_builder_capabilities: 'Возможности',
    agent_builder_save: 'Сохранить',
    agent_builder_share: 'Поделиться',
    
    // Demo
    demo_title: 'Демо-тур',
    demo_tour: 'Пройти тур',
    demo_skip: 'Пропустить',
    demo_next: 'Далее',
    demo_prev: 'Назад',
    
    // Errors
    error_network: 'Ошибка сети. Проверьте подключение.',
    error_auth: 'Ошибка аутентификации. Войдите снова.',
    error_session: 'Сессия истекла. Обновите страницу.',
    error_upload: 'Загрузка не удалась. Попробуйте снова.',
    error_api: 'Ошибка API. Попробуйте позже.',
    error_timeout: 'Время ожидания истекло. Попробуйте снова.',
    error_unknown: 'Что-то пошло не так. Попробуйте снова.',
    
    // Messages
    msg_welcome: 'Добро пожаловать!',
    msg_goodbye: 'До свидания!',
    msg_saved: 'Успешно сохранено',
    msg_deleted: 'Успешно удалено',
    msg_uploaded: 'Успешно загружено',
    msg_processing: 'Обработка...',
    msg_complete: 'Завершено',
    msg_error: 'Произошла ошибка',
    
    // File Upload
    upload_title: 'Загрузка файлов',
    upload_drop: 'Перетащите файлы сюда или нажмите для выбора',
    upload_browse: 'Выбрать файлы',
    upload_supported: 'Поддерживаемые форматы: PDF, DOCX, TXT',
    upload_max_size: 'Максимальный размер файла: 10МБ',
    upload_success: 'Загрузка успешна',
    upload_failed: 'Загрузка не удалась',
    
    // Search & Filter
    search_placeholder: 'Поиск...',
    filter_all: 'Все',
    filter_active: 'Активные',
    filter_completed: 'Завершённые',
    filter_archived: 'Архивированные',
    
    // Time & Dates
    time_just_now: 'Только что',
    time_minutes_ago: '{{count}} мин. назад',
    time_hours_ago: '{{count}} ч. назад',
    time_days_ago: '{{count}} дн. назад',
    time_weeks_ago: '{{count}} нед. назад',
    time_months_ago: '{{count}} мес. назад',
    
    // Confidence Levels
    confidence_high: 'Высокая',
    confidence_medium: 'Средняя',
    confidence_low: 'Низкая',
    confidence_very_high: 'Очень высокая',
    confidence_very_low: 'Очень низкая',
    
    // Workflow Types
    workflow_counsel: 'Консультант',
    workflow_review: 'Обзор',
    workflow_adversarial: 'Состязательный',
    workflow_roundtable: 'Круглый стол',
    workflow_legal_design: 'Legal Design',
    workflow_full_bench: 'Полный состав',
    workflow_verification: 'Верификация',
    
    // Intensity Levels
    intensity_light: 'Лёгкий',
    intensity_standard: 'Стандартный',
    intensity_deep: 'Глубокий',
    intensity_exhaustive: 'Исчерпывающий',
    
    // YOLO Quick Start
    yolo_title: 'Быстрый старт',
    yolo_subtitle: 'Задайте вопрос и получите мгновенный анализ',
    yolo_question: 'Ваш вопрос',
    yolo_tier_fast: 'Быстрый (5 мин)',
    yolo_tier_standard: 'Стандартный (15 мин)',
    yolo_tier_deep: 'Глубокий (30 мин)',
    yolo_launch: 'Запустить',
    
    // Sidebar
    sidebar_home: 'Главная',
    sidebar_cases: 'Дела',
    sidebar_profile: 'Профиль',
    sidebar_settings: 'Настройки',
    sidebar_logout: 'Выйти',
    sidebar_agents: 'Агенты',
    
    // Status
    status_idle: 'Бездействие',
    status_active: 'Активен',
    status_working: 'Работает',
    status_talking: 'Говорит',
    
    // Offline Banner
    offline_title: 'Нет подключения',
    offline_message: 'Некоторые функции могут быть недоступны до восстановления соединения.',
    offline_retry: 'Повторить',
    
    // Queue Banner
    queue_title: 'В очереди',
    queue_position: 'Позиция #{{position}}',
    queue_wait: 'Ожидаемое время: {{time}}',
    
    // Debate Log
    debate_title: 'Дебаты',
    debate_log: 'Журнал дебатов',
    debate_disagreement: 'Обнаружено разногласие',
    debate_resolution: 'Разрешение',
    
    // Timeline
    timeline_started: 'Начато',
    timeline_briefing: 'Брифинг',
    timeline_staffing: 'Комплектование',
    timeline_working: 'Работа',
    timeline_verification: 'Верификация',
    timeline_delivery: 'Доставка',
    timeline_completed: 'Завершено',
    
    // Session List
    session_list_title: 'Сессии',
    session_list_empty: 'Нет сессий',
    session_list_load_more: 'Загрузить ещё',
    
    // Controls
    controls_play: 'Воспроизвести',
    controls_pause: 'Пауза',
    controls_stop: 'Стоп',
    controls_restart: 'Перезапустить',
    
    // Legal
    legal_title: 'Правовая информация',
    legal_terms: 'Условия использования',
    legal_privacy: 'Политика конфиденциальности',
    legal_disclaimer: 'Отказ от ответственности',
    
    // Partner
    partner_title: 'Партнёр',
    partner_consult: 'Консультация с партнёром',
    partner_request: 'Запросить проверку',
    
    // Archive
    archive_title: 'Архив',
    archive_restore: 'Восстановить',
    archive_permanent_delete: 'Удалить навсегда',
    
    // Dispatch
    dispatch_title: 'Диспетчеризация',
    dispatch_pending: 'Ожидает',
    dispatch_assigned: 'Назначено',
    
    // Ralph Loop
    ralph_title: 'Ralph',
    ralph_quote: 'Цитата дня',
    
    // Challenge
    challenge_title: 'Испытание',
    challenge_compare: 'Сравнить',
    challenge_submit: 'Отправить',
    
    // Showcase
    showcase_title: 'Витрина',
    showcase_examples: 'Примеры',
    
    // Misc
    misc_version: 'Версия',
    misc_build: 'Сборка',
    misc_uptime: 'Время работы',
    misc_performance: 'Производительность',
    misc_feedback: 'Обратная связь',
    misc_report_issue: 'Сообщить о проблеме',
  },
};

let currentLocale: 'en' | 'ru' = 'ru';

export function setLocale(locale: 'en' | 'ru') {
  currentLocale = locale;
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('lavern_locale', locale);
  }
}

export function getLocale(): 'en' | 'ru' {
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem('lavern_locale') as 'en' | 'ru' | null;
    if (stored && (stored === 'en' || stored === 'ru')) {
      return stored;
    }
  }
  return 'ru'; // Default to Russian
}

export function t(key: TranslationKey, params?: Record<string, string | number>): string {
  let text = translations[currentLocale][key] || translations.en[key] || key;
  
  if (params) {
    Object.entries(params).forEach(([paramKey, value]) => {
      text = text.replace(new RegExp(`\\{\\{${paramKey}\\}\\}`, 'g'), String(value));
    });
  }
  
  return text;
}

export function initI18n() {
  const savedLocale = getLocale();
  setLocale(savedLocale);
}

export default {
  t,
  setLocale,
  getLocale,
  initI18n,
  translations,
};
