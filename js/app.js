(function () {
  'use strict';

  // =========================================================================
  //  DATA LAYER — Seed Data & localStorage CRUD
  // =========================================================================

  const STORAGE_KEYS = {
    transactions: 'bb_transactions',
    categories: 'bb_categories',
    goals: 'bb_goals',
  };

  const ICON_MAP = {
    cart: 'GR',
    utensils: 'DI',
    car: 'TR',
    film: 'EN',
    shirt: 'CL',
    bolt: 'UT',
    home: 'HO',
    heart: 'HE',
    book: 'ED',
    star: 'OT',
  };

  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  function load(key) {
    try {
      return JSON.parse(localStorage.getItem(key)) || [];
    } catch (_) {
      return [];
    }
  }

  function save(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  function getTransactions() { return load(STORAGE_KEYS.transactions); }
  function setTransactions(d) { save(STORAGE_KEYS.transactions, d); }
  function getCategories() { return load(STORAGE_KEYS.categories); }
  function setCategories(d) { save(STORAGE_KEYS.categories, d); }
  function getGoals() { return load(STORAGE_KEYS.goals); }
  function setGoals(d) { save(STORAGE_KEYS.goals, d); }

  // ---- Seed Data (college student in March/April 2026) --------------------

  function seedIfEmpty() {
    if (getTransactions().length > 0) return;

    var cats = [
      { id: 'cat-groceries', name: 'Groceries', limit: 300, color: '#4A90D9', icon: 'cart' },
      { id: 'cat-dining', name: 'Dining', limit: 150, color: '#D87093', icon: 'utensils' },
      { id: 'cat-transport', name: 'Transport', limit: 100, color: '#E6A23C', icon: 'car' },
      { id: 'cat-entertainment', name: 'Entertainment', limit: 80, color: '#9B6DCC', icon: 'film' },
      { id: 'cat-utilities', name: 'Utilities', limit: 120, color: '#5BBCD6', icon: 'bolt' },
      { id: 'cat-rent', name: 'Rent', limit: 950, color: '#E66B6B', icon: 'home' },
    ];
    setCategories(cats);

    var goals = [
      { id: 'goal-emergency', name: 'Emergency Fund', target: 1000, saved: 340, deadline: '2026-08-31', monthlyContribution: 100, notes: 'Target 3-month buffer' },
      { id: 'goal-laptop', name: 'New Laptop', target: 1400, saved: 620, deadline: '2026-12-15', monthlyContribution: 75, notes: 'For senior year courses' },
    ];
    setGoals(goals);

    var txns = [
      // --- March 2026 ---
      { id: uid(), type: 'income', description: 'Part-time campus library job', amount: 820, category: 'Part-Time', date: '2026-03-01', notes: 'Bi-weekly paycheck' },
      { id: uid(), type: 'income', description: 'Freelance logo design', amount: 150, category: 'Freelance', date: '2026-03-05', notes: 'Client: campus café' },
      { id: uid(), type: 'recurring', description: 'Rent — College Park apartment', amount: 950, category: 'Rent', date: '2026-03-01', frequency: 'monthly', nextDue: '2026-04-01', remind: true, notes: 'Split with roommate not reflected' },
      { id: uid(), type: 'recurring', description: 'Spotify Premium', amount: 11.99, category: 'Subscriptions', date: '2026-03-03', frequency: 'monthly', nextDue: '2026-04-03', remind: false },
      { id: uid(), type: 'recurring', description: 'Electric bill', amount: 64, category: 'Utilities', date: '2026-03-07', frequency: 'monthly', nextDue: '2026-04-07', remind: true },
      { id: uid(), type: 'expense', description: 'Trader Joe\'s grocery haul', amount: 67.43, category: 'Groceries', date: '2026-03-04' },
      { id: uid(), type: 'expense', description: 'Chipotle with friends', amount: 14.25, category: 'Dining', date: '2026-03-06', notes: 'Team study session' },
      { id: uid(), type: 'expense', description: 'Metro SmarTrip reload', amount: 20, category: 'Transport', date: '2026-03-08' },
      { id: uid(), type: 'expense', description: 'Movie tickets — Regal', amount: 26, category: 'Entertainment', date: '2026-03-10', notes: '2 tickets for new release' },
      { id: uid(), type: 'expense', description: 'Aldi weekly groceries', amount: 52.18, category: 'Groceries', date: '2026-03-12' },
      { id: uid(), type: 'expense', description: 'Campus café lunch', amount: 9.50, category: 'Dining', date: '2026-03-14' },
      { id: uid(), type: 'expense', description: 'Uber to airport', amount: 38, category: 'Transport', date: '2026-03-15', notes: 'Spring break trip' },
      { id: uid(), type: 'expense', description: 'Grocery run at Walmart', amount: 43.65, category: 'Groceries', date: '2026-03-22' },
      { id: uid(), type: 'income', description: 'Part-time campus library job', amount: 820, category: 'Part-Time', date: '2026-03-16', notes: 'Bi-weekly paycheck' },

      // --- April 2026 ---
      { id: uid(), type: 'income', description: 'Part-time campus library job', amount: 820, category: 'Part-Time', date: '2026-04-01', notes: 'Bi-weekly paycheck' },
      { id: uid(), type: 'recurring', description: 'Rent — College Park apartment', amount: 950, category: 'Rent', date: '2026-04-01', frequency: 'monthly', nextDue: '2026-05-01', remind: true },
      { id: uid(), type: 'recurring', description: 'Spotify Premium', amount: 11.99, category: 'Subscriptions', date: '2026-04-03', frequency: 'monthly', nextDue: '2026-05-03', remind: false },
      { id: uid(), type: 'expense', description: 'Trader Joe\'s grocery run', amount: 58.90, category: 'Groceries', date: '2026-04-02' },
      { id: uid(), type: 'expense', description: 'Pho restaurant downtown', amount: 16.75, category: 'Dining', date: '2026-04-04', notes: 'Date night' },
      { id: uid(), type: 'expense', description: 'Gas station fill-up', amount: 42, category: 'Transport', date: '2026-04-05' },
      { id: uid(), type: 'recurring', description: 'Electric bill', amount: 58, category: 'Utilities', date: '2026-04-06', frequency: 'monthly', nextDue: '2026-05-06', remind: true },
      { id: uid(), type: 'expense', description: 'Board game café', amount: 18, category: 'Entertainment', date: '2026-04-05', notes: 'Friday hangout' },
    ];
    setTransactions(txns);
  }

  // =========================================================================
  //  CORE ENGINE — Navigation, Toast, Modal
  // =========================================================================

  var currentFeature = 'fs-recording';

  function $(sel) { return document.querySelector(sel); }
  function $$(sel) { return document.querySelectorAll(sel); }

  // ---- Feature-set & screen routing ----

  function showFeature(featureId) {
    currentFeature = featureId;
    $$('.feature-set').forEach(function (fs) {
      fs.classList.toggle('active', fs.id === featureId);
    });
    $$('.nav-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.feature === featureId);
    });
    refreshActiveFeature();
  }

  function showScreen(screenId) {
    var parent = $('#' + screenId).closest('.feature-set');
    parent.querySelectorAll('.screen').forEach(function (s) {
      s.classList.toggle('active', s.id === screenId);
    });
  }

  function refreshActiveFeature() {
    if (currentFeature === 'fs-recording') renderTransactionList();
    else if (currentFeature === 'fs-planning') renderPlanningOverview();
    else if (currentFeature === 'fs-tracking') renderTrackingDashboard();
  }

  // ---- Toast ----

  var toastTimer = null;
  function showToast(msg) {
    var t = $('#toast');
    t.textContent = msg;
    t.classList.remove('hidden');
    requestAnimationFrame(function () { t.classList.add('visible'); });
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      t.classList.remove('visible');
      setTimeout(function () { t.classList.add('hidden'); }, 260);
    }, 2200);
  }

  // ---- Modal ----

  var modalCallback = null;

  function showModal(msg, confirmLabel, cb) {
    $('#modal-message').textContent = msg;
    $('#modal-confirm').textContent = confirmLabel || 'Delete';
    $('#modal-overlay').classList.remove('hidden');
    modalCallback = cb;
  }

  function hideModal() {
    $('#modal-overlay').classList.add('hidden');
    modalCallback = null;
  }

  // ---- Money formatting ----

  function fmt(n) {
    return '$' + Math.abs(n).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function monthLabel(year, month) {
    var names = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    return names[month] + ' ' + year;
  }

  // =========================================================================
  //  RECORDING MODULE
  // =========================================================================

  var recSearchOpen = false;

  function transactionsForMonth(year, month) {
    return getTransactions().filter(function (t) {
      var d = new Date(t.date + 'T00:00:00');
      return d.getFullYear() === year && d.getMonth() === month;
    });
  }

  function applyFiltersAndSort(list) {
    var typeFilter = 'all';
    var activeTab = $('#rec-type-filter .filter-tab.active');
    if (activeTab) typeFilter = activeTab.dataset.filter;

    if (typeFilter !== 'all') {
      list = list.filter(function (t) { return t.type === typeFilter; });
    }

    var query = '';
    if (recSearchOpen) {
      query = ($('#rec-search-input').value || '').toLowerCase().trim();
    }
    if (query) {
      list = list.filter(function (t) {
        return t.description.toLowerCase().indexOf(query) !== -1 ||
               t.category.toLowerCase().indexOf(query) !== -1 ||
               (t.notes || '').toLowerCase().indexOf(query) !== -1;
      });
    }

    var sort = $('#rec-sort-select').value;
    list.sort(function (a, b) {
      if (sort === 'date-desc') return b.date.localeCompare(a.date);
      if (sort === 'date-asc') return a.date.localeCompare(b.date);
      if (sort === 'amount-desc') return b.amount - a.amount;
      if (sort === 'amount-asc') return a.amount - b.amount;
      if (sort === 'category') return a.category.localeCompare(b.category);
      return 0;
    });

    return list;
  }

  function renderTransactionList() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    $('#rec-month-label').textContent = monthLabel(year, month);

    var all = getTransactions();
    var monthTxns = transactionsForMonth(year, month);

    var income = 0, expenses = 0;
    monthTxns.forEach(function (t) {
      if (t.type === 'income') income += t.amount;
      else expenses += t.amount;
    });
    var balance = income - expenses;
    var balEl = $('#rec-month-balance');
    balEl.textContent = (balance >= 0 ? '+' : '-') + fmt(Math.abs(balance));
    balEl.style.color = balance >= 0 ? 'var(--success)' : 'var(--danger)';

    var displayList = applyFiltersAndSort(all);
    var ul = $('#rec-transaction-list');
    ul.innerHTML = '';

    if (displayList.length === 0) {
      ul.innerHTML = '<li class="empty-state"><div class="empty-state-icon">--</div><div class="empty-state-text">No transactions found</div></li>';
      return;
    }

    var cats = getCategories();
    var catMap = {};
    cats.forEach(function (c) { catMap[c.name] = c; });

    displayList.forEach(function (t) {
      var li = document.createElement('li');
      li.className = 'txn-item';
      li.dataset.id = t.id;

      var cat = catMap[t.category];
      var bgColor = cat ? cat.color + '22' : 'var(--accent-light)';
      var icon = cat ? ICON_MAP[cat.icon] || 'OT' : getCategoryFallbackIcon(t.category);

      var amtClass = t.type;
      var prefix = t.type === 'income' ? '+' : '-';
      var dateStr = formatDateShort(t.date);
      var recurBadge = t.type === 'recurring' ? '<span class="txn-recur-badge">' + (t.frequency || 'monthly') + '</span>' : '';

      li.innerHTML =
        '<div class="txn-icon" style="background:' + bgColor + '">' + icon + '</div>' +
        '<div class="txn-info"><div class="txn-desc">' + escHtml(t.description) + '</div>' +
        '<div class="txn-meta">' + escHtml(t.category) + ' &middot; ' + dateStr + '</div></div>' +
        '<div class="txn-amount"><div class="txn-amount-value ' + amtClass + '">' + prefix + fmt(t.amount) + '</div>' + recurBadge + '</div>';

      li.addEventListener('click', function () { openTransactionDetail(t.id); });
      ul.appendChild(li);
    });
  }

  function getCategoryFallbackIcon(catName) {
    var map = { Salary: 'SA', 'Part-Time': 'PT', Freelance: 'FR', Gift: 'GI', Stipend: 'ST',
      Subscriptions: 'SB', 'Other Income': 'OI', 'Other Expense': 'OE', Health: 'HE', Education: 'ED', Clothing: 'CL' };
    return map[catName] || catName.substring(0, 2).toUpperCase();
  }

  function formatDateShort(dateStr) {
    var d = new Date(dateStr + 'T00:00:00');
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
  }

  function escHtml(str) {
    var el = document.createElement('span');
    el.textContent = str;
    return el.innerHTML;
  }

  // ---- Transaction Detail ----

  function openTransactionDetail(id) {
    var txns = getTransactions();
    var t = txns.find(function (x) { return x.id === id; });
    if (!t) return;

    var body = $('#rec-detail-body');
    var amtClass = t.type;

    var html = '<div class="detail-amount-big"><div class="amount ' + amtClass + '">' +
      (t.type === 'income' ? '+' : '-') + fmt(t.amount) + '</div>' +
      '<div class="type-label">' + t.type + '</div></div>' +
      '<div class="detail-card">' +
      detailRow('Description', t.description) +
      detailRow('Category', t.category) +
      detailRow('Date', formatDateShort(t.date));

    if (t.type === 'recurring') {
      html += detailRow('Frequency', t.frequency || 'monthly');
      html += detailRow('Next Due', t.nextDue ? formatDateShort(t.nextDue) : '—');
      html += detailRow('Reminder', t.remind ? 'On' : 'Off');
    }
    html += '</div>';

    if (t.notes) {
      html += '<div class="section-label"><span>Notes</span></div><div class="detail-notes">' + escHtml(t.notes) + '</div>';
    }

    body.innerHTML = html;
    body.dataset.txnId = id;
    showScreen('rec-detail');
  }

  function detailRow(label, value) {
    return '<div class="detail-row"><span class="detail-label">' + escHtml(label) + '</span><span class="detail-value">' + escHtml(value) + '</span></div>';
  }

  // ---- Add / Edit Transaction ----

  var editingTxnId = null;

  function openAddTransaction() {
    editingTxnId = null;
    $('#rec-add-title').textContent = 'Add Transaction';
    $('#rec-add-form').reset();
    var today = new Date();
    $('#rec-date').value = today.toISOString().split('T')[0];
    $$('#rec-type-group input')[0].checked = true;
    toggleRecurringFields();
    updateCategoryOptions('expense');
    showScreen('rec-add');
  }

  function openEditTransaction(id) {
    var txns = getTransactions();
    var t = txns.find(function (x) { return x.id === id; });
    if (!t) return;

    editingTxnId = id;
    $('#rec-add-title').textContent = 'Edit Transaction';

    var radios = $$('#rec-type-group input');
    radios.forEach(function (r) { r.checked = r.value === t.type; });

    updateCategoryOptions(t.type);
    $('#rec-description').value = t.description;
    $('#rec-amount').value = t.amount;
    $('#rec-category').value = t.category;
    $('#rec-date').value = t.date;
    $('#rec-notes').value = t.notes || '';

    if (t.type === 'recurring') {
      $('#rec-frequency').value = t.frequency || 'monthly';
      $('#rec-next-due').value = t.nextDue || '';
      $('#rec-remind').checked = !!t.remind;
    }

    toggleRecurringFields();
    showScreen('rec-add');
  }

  function toggleRecurringFields() {
    var type = document.querySelector('input[name="rec-type"]:checked').value;
    var fields = $('#rec-recurring-fields');
    if (type === 'recurring') fields.classList.remove('hidden');
    else fields.classList.add('hidden');
    updateCategoryOptions(type);
  }

  function updateCategoryOptions(type) {
    var sel = $('#rec-category');
    var current = sel.value;
    if (type === 'income') {
      sel.querySelectorAll('optgroup').forEach(function (g) {
        g.style.display = g.label === 'Income Categories' ? '' : 'none';
      });
      if (!sel.value || sel.selectedOptions[0].parentElement.label !== 'Income Categories') {
        sel.value = 'Salary';
      }
    } else {
      sel.querySelectorAll('optgroup').forEach(function (g) {
        g.style.display = g.label === 'Expense Categories' ? '' : 'none';
      });
      if (!sel.value || sel.selectedOptions[0].parentElement.label !== 'Expense Categories') {
        sel.value = 'Groceries';
      }
    }
  }

  function saveTransaction(e) {
    e.preventDefault();
    var desc = $('#rec-description').value.trim();
    var amount = parseFloat($('#rec-amount').value);
    var date = $('#rec-date').value;
    var valid = true;

    if (!desc) { showFieldError('rec-description', 'Description is required'); valid = false; }
    else clearFieldError('rec-description');

    if (isNaN(amount) || amount <= 0) { showFieldError('rec-amount', 'Enter a valid amount'); valid = false; }
    else clearFieldError('rec-amount');

    if (!date) { showFieldError('rec-date', 'Date is required'); valid = false; }
    else clearFieldError('rec-date');

    if (!valid) return;

    var type = document.querySelector('input[name="rec-type"]:checked').value;
    var txn = {
      id: editingTxnId || uid(),
      type: type,
      description: desc,
      amount: amount,
      category: $('#rec-category').value,
      date: date,
      notes: $('#rec-notes').value.trim(),
    };

    if (type === 'recurring') {
      txn.frequency = $('#rec-frequency').value;
      txn.nextDue = $('#rec-next-due').value;
      txn.remind = $('#rec-remind').checked;
    }

    var txns = getTransactions();
    if (editingTxnId) {
      var idx = txns.findIndex(function (x) { return x.id === editingTxnId; });
      if (idx !== -1) txns[idx] = txn;
    } else {
      txns.push(txn);
    }
    setTransactions(txns);

    showToast(editingTxnId ? 'Transaction updated' : 'Transaction saved');
    editingTxnId = null;
    showScreen('rec-list');
    renderTransactionList();
  }

  function deleteTransaction(id) {
    showModal('Delete this transaction? This cannot be undone.', 'Delete', function () {
      var txns = getTransactions().filter(function (x) { return x.id !== id; });
      setTransactions(txns);
      showToast('Transaction deleted');
      showScreen('rec-list');
      renderTransactionList();
    });
  }

  function showFieldError(inputId, msg) {
    var input = $('#' + inputId);
    input.classList.add('error');
    var errEl = $('#' + inputId + '-error');
    if (errEl) errEl.textContent = msg;
  }

  function clearFieldError(inputId) {
    var input = $('#' + inputId);
    input.classList.remove('error');
    var errEl = $('#' + inputId + '-error');
    if (errEl) errEl.textContent = '';
  }

  // =========================================================================
  //  PLANNING MODULE
  // =========================================================================

  var planYear = new Date().getFullYear();
  var planMonth = new Date().getMonth();

  function renderPlanningOverview() {
    $('#plan-month-label').textContent = monthLabel(planYear, planMonth);

    var cats = getCategories();
    var txns = transactionsForMonth(planYear, planMonth);
    var allTxns = getTransactions();

    var totalIncome = 0;
    txns.forEach(function (t) { if (t.type === 'income') totalIncome += t.amount; });

    var totalBudget = 0;
    cats.forEach(function (c) { totalBudget += c.limit; });

    $('#plan-total-income').textContent = fmt(totalIncome);
    $('#plan-total-budget').textContent = fmt(totalBudget);
    var unalloc = totalIncome - totalBudget;
    var unallocEl = $('#plan-unallocated');
    unallocEl.textContent = (unalloc >= 0 ? '' : '-') + fmt(Math.abs(unalloc));
    unallocEl.style.color = unalloc >= 0 ? 'var(--success)' : 'var(--danger)';

    // Category list
    var catSpent = {};
    txns.forEach(function (t) {
      if (t.type !== 'income') {
        catSpent[t.category] = (catSpent[t.category] || 0) + t.amount;
      }
    });

    var ul = $('#plan-category-list');
    ul.innerHTML = '';
    cats.forEach(function (c) {
      var spent = catSpent[c.name] || 0;
      var pct = c.limit > 0 ? Math.min((spent / c.limit) * 100, 100) : 0;
      var barColor = pct > 90 ? 'var(--danger)' : pct > 70 ? 'var(--warning)' : c.color;

      var li = document.createElement('li');
      li.className = 'cat-item';
      li.innerHTML =
        '<div class="cat-color-bar" style="background:' + c.color + '"></div>' +
        '<div class="cat-info"><div class="cat-name">' + escHtml(c.name) + '</div>' +
        '<div class="cat-limit">' + fmt(spent) + ' of ' + fmt(c.limit) + '</div></div>' +
        '<div class="cat-bar-wrap"><div class="cat-bar-bg"><div class="cat-bar-fill" style="width:' + pct + '%;background:' + barColor + '"></div></div>' +
        '<div class="cat-bar-text">' + Math.round(pct) + '%</div></div>';

      li.addEventListener('click', function () { openEditCategory(c.id); });
      ul.appendChild(li);
    });

    // Goal list
    var goals = getGoals();
    var gl = $('#plan-goal-list');
    gl.innerHTML = '';

    if (goals.length === 0) {
      gl.innerHTML = '<li class="empty-state"><div class="empty-state-icon">--</div><div class="empty-state-text">No savings goals yet</div></li>';
    }

    goals.forEach(function (g) {
      var pct = g.target > 0 ? Math.min((g.saved / g.target) * 100, 100) : 0;
      var li = document.createElement('li');
      li.className = 'goal-item';
      li.innerHTML =
        '<div class="goal-header"><span class="goal-name">' + escHtml(g.name) + '</span>' +
        '<span class="goal-pct">' + Math.round(pct) + '%</span></div>' +
        '<div class="goal-bar-bg"><div class="goal-bar-fill" style="width:' + pct + '%"></div></div>' +
        '<div class="goal-amounts"><span>' + fmt(g.saved) + ' saved</span><span>Goal: ' + fmt(g.target) + '</span></div>';

      li.addEventListener('click', function () { openEditGoal(g.id); });
      gl.appendChild(li);
    });
  }

  // ---- Add / Edit Budget Category ----

  var editingCatId = null;

  function openAddCategory() {
    editingCatId = null;
    $('#plan-cat-title').textContent = 'Add Category';
    $('#plan-category-form').reset();
    resetPickers();
    $('#plan-cat-delete').classList.add('hidden');
    showScreen('plan-add-category');
  }

  function openEditCategory(id) {
    var cats = getCategories();
    var c = cats.find(function (x) { return x.id === id; });
    if (!c) return;

    editingCatId = id;
    $('#plan-cat-title').textContent = 'Edit Category';
    $('#plan-cat-name').value = c.name;
    $('#plan-cat-limit').value = c.limit;

    $$('#plan-cat-color-picker .color-swatch').forEach(function (sw) {
      sw.classList.toggle('active', sw.dataset.color === c.color);
    });
    $$('#plan-cat-icon-picker .icon-pick').forEach(function (ip) {
      ip.classList.toggle('active', ip.dataset.icon === c.icon);
    });

    $('#plan-cat-delete').classList.remove('hidden');
    showScreen('plan-add-category');
  }

  function resetPickers() {
    $$('#plan-cat-color-picker .color-swatch').forEach(function (sw, i) {
      sw.classList.toggle('active', i === 0);
    });
    $$('#plan-cat-icon-picker .icon-pick').forEach(function (ip, i) {
      ip.classList.toggle('active', i === 0);
    });
  }

  function saveCategory(e) {
    e.preventDefault();
    var name = $('#plan-cat-name').value.trim();
    var limit = parseFloat($('#plan-cat-limit').value);
    var valid = true;

    if (!name) { showFieldError('plan-cat-name', 'Name is required'); valid = false; }
    else clearFieldError('plan-cat-name');

    if (isNaN(limit) || limit < 0) { showFieldError('plan-cat-limit', 'Enter a valid limit'); valid = false; }
    else clearFieldError('plan-cat-limit');

    if (!valid) return;

    var activeColor = $('#plan-cat-color-picker .color-swatch.active');
    var activeIcon = $('#plan-cat-icon-picker .icon-pick.active');

    var cat = {
      id: editingCatId || 'cat-' + uid(),
      name: name,
      limit: limit,
      color: activeColor ? activeColor.dataset.color : '#4A90D9',
      icon: activeIcon ? activeIcon.dataset.icon : 'star',
    };

    var cats = getCategories();
    if (editingCatId) {
      var idx = cats.findIndex(function (x) { return x.id === editingCatId; });
      if (idx !== -1) cats[idx] = cat;
    } else {
      cats.push(cat);
    }
    setCategories(cats);

    showToast(editingCatId ? 'Category updated' : 'Category created');
    editingCatId = null;
    showScreen('plan-overview');
    renderPlanningOverview();
  }

  function deleteCategory(id) {
    showModal('Delete this budget category? This cannot be undone.', 'Delete', function () {
      var cats = getCategories().filter(function (x) { return x.id !== id; });
      setCategories(cats);
      showToast('Category deleted');
      editingCatId = null;
      showScreen('plan-overview');
      renderPlanningOverview();
    });
  }

  // ---- Add / Edit Savings Goal ----

  var editingGoalId = null;

  function openAddGoal() {
    editingGoalId = null;
    $('#plan-goal-title').textContent = 'Add Savings Goal';
    $('#plan-goal-form').reset();
    $('#plan-goal-delete').classList.add('hidden');
    showScreen('plan-add-goal');
  }

  function openEditGoal(id) {
    var goals = getGoals();
    var g = goals.find(function (x) { return x.id === id; });
    if (!g) return;

    editingGoalId = id;
    $('#plan-goal-title').textContent = 'Edit Savings Goal';
    $('#plan-goal-name').value = g.name;
    $('#plan-goal-target').value = g.target;
    $('#plan-goal-saved').value = g.saved;
    $('#plan-goal-deadline').value = g.deadline || '';
    $('#plan-goal-monthly').value = g.monthlyContribution || '';
    $('#plan-goal-notes').value = g.notes || '';
    $('#plan-goal-delete').classList.remove('hidden');
    showScreen('plan-add-goal');
  }

  function saveGoal(e) {
    e.preventDefault();
    var name = $('#plan-goal-name').value.trim();
    var target = parseFloat($('#plan-goal-target').value);
    var valid = true;

    if (!name) { showFieldError('plan-goal-name', 'Goal name is required'); valid = false; }
    else clearFieldError('plan-goal-name');

    if (isNaN(target) || target <= 0) { showFieldError('plan-goal-target', 'Enter a valid target amount'); valid = false; }
    else clearFieldError('plan-goal-target');

    if (!valid) return;

    var goal = {
      id: editingGoalId || 'goal-' + uid(),
      name: name,
      target: target,
      saved: parseFloat($('#plan-goal-saved').value) || 0,
      deadline: $('#plan-goal-deadline').value || null,
      monthlyContribution: parseFloat($('#plan-goal-monthly').value) || 0,
      notes: $('#plan-goal-notes').value.trim(),
    };

    var goals = getGoals();
    if (editingGoalId) {
      var idx = goals.findIndex(function (x) { return x.id === editingGoalId; });
      if (idx !== -1) goals[idx] = goal;
    } else {
      goals.push(goal);
    }
    setGoals(goals);

    showToast(editingGoalId ? 'Goal updated' : 'Goal created');
    editingGoalId = null;
    showScreen('plan-overview');
    renderPlanningOverview();
  }

  function deleteGoal(id) {
    showModal('Delete this savings goal? This cannot be undone.', 'Delete', function () {
      var goals = getGoals().filter(function (x) { return x.id !== id; });
      setGoals(goals);
      showToast('Goal deleted');
      editingGoalId = null;
      showScreen('plan-overview');
      renderPlanningOverview();
    });
  }

  // =========================================================================
  //  TRACKING MODULE
  // =========================================================================

  var trackYear = new Date().getFullYear();
  var trackMonth = new Date().getMonth();

  function renderTrackingDashboard() {
    $('#track-month-label').textContent = monthLabel(trackYear, trackMonth);

    var txns = transactionsForMonth(trackYear, trackMonth);
    var cats = getCategories();

    var totalIncome = 0, totalSpent = 0;
    txns.forEach(function (t) {
      if (t.type === 'income') totalIncome += t.amount;
      else totalSpent += t.amount;
    });

    $('#track-total-income').textContent = fmt(totalIncome);
    $('#track-total-spent').textContent = fmt(totalSpent);
    var remaining = totalIncome - totalSpent;
    var remEl = $('#track-remaining');
    remEl.textContent = (remaining >= 0 ? '' : '-') + fmt(Math.abs(remaining));
    remEl.style.color = remaining >= 0 ? 'var(--accent)' : 'var(--danger)';

    // Compute category spending
    var catSpent = {};
    txns.forEach(function (t) {
      if (t.type !== 'income') {
        catSpent[t.category] = (catSpent[t.category] || 0) + t.amount;
      }
    });

    var catMap = {};
    cats.forEach(function (c) { catMap[c.name] = c; });

    // Build chart data (only categories with spending)
    var chartData = [];
    var usedCategories = Object.keys(catSpent).sort();
    usedCategories.forEach(function (catName) {
      var c = catMap[catName];
      chartData.push({
        name: catName,
        spent: catSpent[catName],
        color: c ? c.color : '#8B90A0',
        icon: c ? ICON_MAP[c.icon] || 'OT' : 'OT',
        limit: c ? c.limit : 0,
      });
    });

    drawPieChart(chartData, totalSpent);
    renderChartLegend(chartData, totalSpent);
    renderTrackingCategoryList(cats, catSpent);
  }

  function drawPieChart(data, total) {
    var canvas = $('#trackPieChart');
    var ctx = canvas.getContext('2d');
    var size = 200;
    canvas.width = size;
    canvas.height = size;
    ctx.clearRect(0, 0, size, size);

    if (total === 0 || data.length === 0) {
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, 80, 0, Math.PI * 2);
      ctx.fillStyle = '#E2E4EC';
      ctx.fill();
      ctx.fillStyle = '#8B90A0';
      ctx.font = '14px "Segoe UI", Arial, Helvetica, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('No spending', size / 2, size / 2);
      return;
    }

    var cx = size / 2, cy = size / 2, r = 80;
    var start = -Math.PI / 2;

    data.forEach(function (item) {
      var angle = (item.spent / total) * Math.PI * 2;
      if (angle < 0.01) return;
      var end = start + angle;

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, r, start, end);
      ctx.closePath();
      ctx.fillStyle = item.color;
      ctx.fill();

      ctx.lineWidth = 2;
      ctx.strokeStyle = '#F5F6FA';
      ctx.stroke();

      start = end;
    });

    // Center hole (donut)
    ctx.beginPath();
    ctx.arc(cx, cy, 45, 0, Math.PI * 2);
    ctx.fillStyle = '#F5F6FA';
    ctx.fill();

    ctx.fillStyle = '#1A1D26';
    ctx.font = 'bold 16px "Segoe UI", Arial, Helvetica, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(fmt(total), cx, cy);
  }

  function renderChartLegend(data, total) {
    var legend = $('#track-chart-legend');
    legend.innerHTML = '';
    data.forEach(function (item) {
      var pct = total > 0 ? Math.round((item.spent / total) * 100) : 0;
      var div = document.createElement('div');
      div.className = 'legend-item';
      div.innerHTML = '<span class="legend-dot" style="background:' + item.color + '"></span>' +
        '<span>' + escHtml(item.name) + ' (' + pct + '%)</span>';
      legend.appendChild(div);
    });
  }

  function renderTrackingCategoryList(cats, catSpent) {
    var ul = $('#track-category-list');
    ul.innerHTML = '';

    cats.forEach(function (c) {
      var spent = catSpent[c.name] || 0;
      var pct = c.limit > 0 ? Math.min((spent / c.limit) * 100, 100) : 0;
      var barColor = pct > 90 ? 'var(--danger)' : pct > 70 ? 'var(--warning)' : c.color;

      var li = document.createElement('li');
      li.className = 'track-cat-item';
      li.innerHTML =
        '<div class="track-cat-icon" style="background:' + c.color + '22">' + (ICON_MAP[c.icon] || 'OT') + '</div>' +
        '<div class="track-cat-info"><div class="track-cat-name">' + escHtml(c.name) + '</div>' +
        '<div class="track-cat-amounts">' + fmt(spent) + ' of ' + fmt(c.limit) + '</div></div>' +
        '<div class="track-cat-bar-wrap"><div class="track-cat-bar-bg"><div class="track-cat-bar-fill" style="width:' + pct + '%;background:' + barColor + '"></div></div>' +
        '<div class="track-cat-pct">' + Math.round(pct) + '%</div></div>';

      li.addEventListener('click', function () { openCategoryDetail(c); });
      ul.appendChild(li);
    });

    // Also show uncategorized spending (categories in transactions but not in budget)
    var budgetCatNames = {};
    cats.forEach(function (c) { budgetCatNames[c.name] = true; });
    Object.keys(catSpent).forEach(function (catName) {
      if (!budgetCatNames[catName] && catSpent[catName] > 0) {
        var li = document.createElement('li');
        li.className = 'track-cat-item';
        li.innerHTML =
          '<div class="track-cat-icon" style="background:var(--accent-light)">' + getCategoryFallbackIcon(catName) + '</div>' +
          '<div class="track-cat-info"><div class="track-cat-name">' + escHtml(catName) + '</div>' +
          '<div class="track-cat-amounts">' + fmt(catSpent[catName]) + ' (no budget set)</div></div>' +
          '<div class="track-cat-bar-wrap"></div>';
        li.addEventListener('click', function () {
          openCategoryDetail({ name: catName, color: '#8B90A0', limit: 0, icon: 'star' });
        });
        ul.appendChild(li);
      }
    });
  }

  function openCategoryDetail(cat) {
    $('#track-cat-detail-title').textContent = cat.name;
    var txns = transactionsForMonth(trackYear, trackMonth).filter(function (t) {
      return t.category === cat.name && t.type !== 'income';
    });

    var spent = 0;
    txns.forEach(function (t) { spent += t.amount; });

    var pct = cat.limit > 0 ? Math.min((spent / cat.limit) * 100, 100) : 0;
    var barColor = pct > 90 ? 'var(--danger)' : pct > 70 ? 'var(--warning)' : cat.color;
    var remaining = Math.max(cat.limit - spent, 0);

    var html = '<div class="cat-detail-header"><div class="cat-detail-name">' + escHtml(cat.name) + '</div>' +
      '<div class="cat-detail-limit">Budget: ' + fmt(cat.limit) + ' / month</div></div>' +
      '<div class="cat-detail-progress"><div class="cat-detail-bar-bg"><div class="cat-detail-bar-fill" style="width:' + pct + '%;background:' + barColor + '"></div></div>' +
      '<div class="cat-detail-bar-labels"><span class="spent">' + fmt(spent) + ' spent</span><span>' + fmt(remaining) + ' left</span></div></div>';

    html += '<div class="cat-detail-txns-title">Transactions this month</div>';

    if (txns.length === 0) {
      html += '<div class="empty-state"><div class="empty-state-text">No transactions in this category</div></div>';
    } else {
      html += '<ul class="transaction-list" style="padding:0">';
      txns.forEach(function (t) {
        html += '<li class="txn-item" style="cursor:default"><div class="txn-info"><div class="txn-desc">' + escHtml(t.description) + '</div>' +
          '<div class="txn-meta">' + formatDateShort(t.date) + '</div></div>' +
          '<div class="txn-amount"><div class="txn-amount-value expense">-' + fmt(t.amount) + '</div></div></li>';
      });
      html += '</ul>';
    }

    $('#track-cat-detail-body').innerHTML = html;
    showScreen('track-category-detail');
  }

  // =========================================================================
  //  EVENT BINDING
  // =========================================================================

  function init() {
    seedIfEmpty();

    // Bottom navigation
    $$('.nav-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        showFeature(btn.dataset.feature);
      });
    });

    // Back buttons
    $$('.back-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.dataset.back;
        if (target) showScreen(target);
      });
    });

    // Modal
    $('#modal-cancel').addEventListener('click', hideModal);
    $('#modal-confirm').addEventListener('click', function () {
      if (modalCallback) modalCallback();
      hideModal();
    });

    // ---- Recording events ----

    // Search toggle
    $('#rec-search-toggle').addEventListener('click', function () {
      recSearchOpen = !recSearchOpen;
      var bar = $('#rec-search-bar');
      var btn = $('#rec-search-toggle');
      if (recSearchOpen) {
        bar.classList.remove('hidden');
        btn.classList.add('active');
        $('#rec-search-input').focus();
      } else {
        bar.classList.add('hidden');
        btn.classList.remove('active');
        $('#rec-search-input').value = '';
        renderTransactionList();
      }
    });

    $('#rec-search-input').addEventListener('input', function () {
      renderTransactionList();
    });

    $('#rec-search-clear').addEventListener('click', function () {
      $('#rec-search-input').value = '';
      renderTransactionList();
    });

    // Filter tabs
    $$('#rec-type-filter .filter-tab').forEach(function (tab) {
      tab.addEventListener('click', function () {
        $$('#rec-type-filter .filter-tab').forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        renderTransactionList();
      });
    });

    // Sort
    $('#rec-sort-select').addEventListener('change', function () {
      renderTransactionList();
    });

    // Add transaction
    $('#rec-add-btn').addEventListener('click', openAddTransaction);
    $('#rec-cancel-btn').addEventListener('click', function () { showScreen('rec-list'); });
    $('#rec-add-form').addEventListener('submit', saveTransaction);

    // Type radio changes
    $$('#rec-type-group input').forEach(function (radio) {
      radio.addEventListener('change', toggleRecurringFields);
    });

    // Detail: edit & delete
    $('#rec-detail-edit').addEventListener('click', function () {
      var id = $('#rec-detail-body').dataset.txnId;
      if (id) openEditTransaction(id);
    });

    $('#rec-detail-delete').addEventListener('click', function () {
      var id = $('#rec-detail-body').dataset.txnId;
      if (id) deleteTransaction(id);
    });

    // ---- Planning events ----

    // Month nav
    $('#plan-prev-month').addEventListener('click', function () {
      planMonth--;
      if (planMonth < 0) { planMonth = 11; planYear--; }
      renderPlanningOverview();
    });
    $('#plan-next-month').addEventListener('click', function () {
      planMonth++;
      if (planMonth > 11) { planMonth = 0; planYear++; }
      renderPlanningOverview();
    });

    // Add category
    $('#plan-add-category-btn').addEventListener('click', openAddCategory);
    $('#plan-cat-cancel').addEventListener('click', function () { showScreen('plan-overview'); });
    $('#plan-category-form').addEventListener('submit', saveCategory);
    $('#plan-cat-delete').addEventListener('click', function () {
      if (editingCatId) deleteCategory(editingCatId);
    });

    // Color picker
    $$('#plan-cat-color-picker .color-swatch').forEach(function (sw) {
      sw.addEventListener('click', function () {
        $$('#plan-cat-color-picker .color-swatch').forEach(function (s) { s.classList.remove('active'); });
        sw.classList.add('active');
      });
    });

    // Icon picker
    $$('#plan-cat-icon-picker .icon-pick').forEach(function (ip) {
      ip.addEventListener('click', function () {
        $$('#plan-cat-icon-picker .icon-pick').forEach(function (i) { i.classList.remove('active'); });
        ip.classList.add('active');
      });
    });

    // Add goal
    $('#plan-add-goal-btn').addEventListener('click', openAddGoal);
    $('#plan-goal-cancel').addEventListener('click', function () { showScreen('plan-overview'); });
    $('#plan-goal-form').addEventListener('submit', saveGoal);
    $('#plan-goal-delete').addEventListener('click', function () {
      if (editingGoalId) deleteGoal(editingGoalId);
    });

    // ---- Tracking events ----

    $('#track-prev-month').addEventListener('click', function () {
      trackMonth--;
      if (trackMonth < 0) { trackMonth = 11; trackYear--; }
      renderTrackingDashboard();
    });
    $('#track-next-month').addEventListener('click', function () {
      trackMonth++;
      if (trackMonth > 11) { trackMonth = 0; trackYear++; }
      renderTrackingDashboard();
    });

    // Initial render
    showFeature('fs-recording');
  }

  // Start
  document.addEventListener('DOMContentLoaded', init);
})();
