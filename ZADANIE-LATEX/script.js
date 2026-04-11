const gaussForm = document.getElementById("gauss-form");
const gaussOutput = document.getElementById("gauss-output");
const gaussSize = document.getElementById("gauss-size");
const detSize = document.getElementById("det-size");
const detForm = document.getElementById("det-form");
const detOutput = document.getElementById("det-output");
const invSize = document.getElementById("inv-size");
const invForm = document.getElementById("inv-form");
const invOutput = document.getElementById("inv-output");

init();

function init() {
  buildGaussInputs(Number(gaussSize.value));
  buildDeterminantInputs(Number(detSize.value));
  buildInverseInputs(Number(invSize.value));
  addListeners();
  updateAll();
}

function addListeners() {
  gaussForm.addEventListener("input", updateGauss);
  detForm.addEventListener("input", updateDeterminant);
  invForm.addEventListener("input", updateInverse);
  gaussSize.addEventListener("change", () => {
    buildGaussInputs(Number(gaussSize.value));
    updateGauss();
  });
  detSize.addEventListener("change", () => {
    buildDeterminantInputs(Number(detSize.value));
    updateDeterminant();
  });
  invSize.addEventListener("change", () => {
    buildInverseInputs(Number(invSize.value));
    updateInverse();
  });
}

function updateAll() {
  updateGauss();
  updateDeterminant();
  updateInverse();
}

function buildGaussInputs(size) {
  gaussForm.innerHTML = "";

  for (let r = 1; r <= size; r += 1) {
    const row = document.createElement("div");
    row.className = `eq-row size-${size}`;

    for (let c = 1; c <= size; c += 1) {
      const label = document.createElement("label");
      label.className = "sr-only";
      label.setAttribute("for", `g-${r}-${c}`);
      label.textContent = `a${r}${c}`;
      row.appendChild(label);

      const input = document.createElement("input");
      input.id = `g-${r}-${c}`;
      input.name = `g${r}${c}`;
      input.type = "number";
      input.step = "any";
      input.placeholder = `a${r}${c}`;
      input.value = defaultGaussValue(size, r, c, false);
      row.appendChild(input);

      const sym = document.createElement("span");
      sym.className = "sym";
      if (c === 1) sym.textContent = "x +";
      if (c === 2) sym.textContent = size === 2 ? "y =" : "y +";
      if (c === 3) sym.textContent = "z =";
      row.appendChild(sym);
    }

    const labelB = document.createElement("label");
    labelB.className = "sr-only";
    labelB.setAttribute("for", `g-${r}-b`);
    labelB.textContent = `b${r}`;
    row.appendChild(labelB);

    const inputB = document.createElement("input");
    inputB.id = `g-${r}-b`;
    inputB.name = `g${r}b`;
    inputB.type = "number";
    inputB.step = "any";
    inputB.placeholder = `b${r}`;
    inputB.value = defaultGaussValue(size, r, 0, true);
    row.appendChild(inputB);

    gaussForm.appendChild(row);
  }
}

function defaultGaussValue(size, r, c, isB) {
  if (size === 2) {
    const a = [
      [2, 1],
      [1, -1]
    ];
    const b = [5, 1];
    return String(isB ? b[r - 1] : a[r - 1][c - 1]);
  }

  const a3 = [
    [2, 1, -1],
    [-3, -1, 2],
    [-2, 1, 2]
  ];
  const b3 = [8, -11, -3];
  return String(isB ? b3[r - 1] : a3[r - 1][c - 1]);
}

// Ta funkcja buduje pola macierzy 2x2 albo 3x3
function buildDeterminantInputs(size) {
  detForm.innerHTML = "";

  const grid = document.createElement("div");
  grid.className = `matrix-grid size-${size}`;

  for (let r = 1; r <= size; r += 1) {
    for (let c = 1; c <= size; c += 1) {
      const input = document.createElement("input");
      input.type = "number";
      input.step = "any";
      input.name = `m${r}${c}`;
      input.placeholder = `a${r}${c}`;

      // Ustawiamy domyslne wartosci, zeby od razu bylo cos policzone
      input.value = defaultMatrixValue(size, r, c);
      grid.appendChild(input);
    }
  }

  detForm.appendChild(grid);
}

function defaultMatrixValue(size, r, c) {
  if (size === 2) {
    const preset = [
      [2, 3],
      [1, 4]
    ];
    return String(preset[r - 1][c - 1]);
  }

  const preset3 = [
    [2, 1, 3],
    [1, -1, 2],
    [3, 2, 0]
  ];
  return String(preset3[r - 1][c - 1]);
}

function buildInverseInputs(size) {
  invForm.innerHTML = "";

  const grid = document.createElement("div");
  grid.className = `matrix-grid size-${size}`;

  for (let r = 1; r <= size; r += 1) {
    for (let c = 1; c <= size; c += 1) {
      const input = document.createElement("input");
      input.type = "number";
      input.step = "any";
      input.name = `i${r}${c}`;
      input.placeholder = `a${r}${c}`;
      input.value = defaultInverseMatrixValue(size, r, c);
      grid.appendChild(input);
    }
  }

  invForm.appendChild(grid);
}

function defaultInverseMatrixValue(size, r, c) {
  if (size === 2) {
    const preset2 = [
      [4, 7],
      [2, 6]
    ];
    return String(preset2[r - 1][c - 1]);
  }

  // Ta macierz ma det=1, wiec daje ladny wynik bez duzych ulamkow
  const preset3 = [
    [1, 2, 3],
    [0, 1, 4],
    [5, 6, 0]
  ];
  return String(preset3[r - 1][c - 1]);
}

function updateGauss() {
  const size = Number(gaussSize.value);
  const matrix = [];

  for (let r = 1; r <= size; r += 1) {
    const row = [];
    for (let c = 1; c <= size; c += 1) {
      row.push(readNumberFromForm(gaussForm, `g${r}${c}`));
    }
    row.push(readNumberFromForm(gaussForm, `g${r}b`));
    matrix.push(row);
  }

  if (matrix.flat().some((v) => Number.isNaN(v))) {
    gaussOutput.innerHTML = `<p class="error">Błąd danych: wpisz poprawne liczby we wszystkich polach.</p>`;
    typesetMath();
    return;
  }

  if (size === 2) {
    renderGauss2(matrix);
    return;
  }

  renderGauss3(matrix);
}

function renderGauss2(startMatrix) {
  const steps = [];
  const m = startMatrix.map((row) => [...row]);

  steps.push(`<div class="step">Równania startowe:</div>`);
  steps.push(latexBlock(`\\begin{cases}
${fmt(m[0][0])}x + ${fmt(m[0][1])}y = ${fmt(m[0][2])} \\\\
${fmt(m[1][0])}x + ${fmt(m[1][1])}y = ${fmt(m[1][2])}
\\end{cases}`));

  if (isZero(m[0][0])) {
    if (!isZero(m[1][0])) {
      [m[0], m[1]] = [m[1], m[0]];
      steps.push(`<div class="step">Pivot w R1 był równy 0, więc zamieniamy R1 i R2.</div>`);
      steps.push(latexBlock(`R_1 \\leftrightarrow R_2`));
    } else {
      gaussOutput.innerHTML = `
        <h3>Rozwiązanie metodą Gaussa 2x2</h3>
        ${steps.join("")}
        <p class="error">Nie można rozpocząć eliminacji (a11 = 0 i a21 = 0).</p>
      `;
      typesetMath();
      return;
    }
  }

  const factor = m[1][0] / m[0][0];
  for (let c = 0; c < 3; c += 1) {
    m[1][c] = m[1][c] - factor * m[0][c];
  }

  steps.push(`<div class="step">Eliminujemy x z drugiego wiersza:</div>`);
  steps.push(latexBlock(`R_2 \\leftarrow R_2 - \\left(${fmt(factor)}\\right)R_1`));
  steps.push(latexBlock(augmentedToLatex(m)));

  if (isZero(m[1][1]) && isZero(m[1][2])) {
    gaussOutput.innerHTML = `
      <h3>Rozwiązanie metodą Gaussa 2x2</h3>
      ${steps.join("")}
      <p class="ok">Układ ma nieskończenie wiele rozwiązań (zależne równania).</p>
    `;
    typesetMath();
    return;
  }

  if (isZero(m[1][1]) && !isZero(m[1][2])) {
    gaussOutput.innerHTML = `
      <h3>Rozwiązanie metodą Gaussa 2x2</h3>
      ${steps.join("")}
      <p class="error">Układ sprzeczny - brak rozwiązań.</p>
    `;
    typesetMath();
    return;
  }

  const y = m[1][2] / m[1][1];
  const x = (m[0][2] - m[0][1] * y) / m[0][0];

  steps.push(`<div class="step">Liczymy zmienne:</div>`);
  steps.push(latexBlock(`y = \\frac{${fmt(m[1][2])}}{${fmt(m[1][1])}} = ${fmt(y)}`));
  steps.push(latexBlock(`x = \\frac{${fmt(m[0][2])} - ${fmt(m[0][1])}\\cdot ${fmt(y)}}{${fmt(m[0][0])}} = ${fmt(x)}`));
  steps.push(latexBlock(`\\boxed{x = ${fmt(x)},\\; y = ${fmt(y)}}`));

  gaussOutput.innerHTML = `
    <h3>Rozwiązanie metodą Gaussa 2x2</h3>
    ${steps.join("")}
    <p class="ok">Układ ma jedno rozwiązanie.</p>
  `;
  typesetMath();
}

function renderGauss3(startMatrix) {
  const steps = [];
  const m = startMatrix.map((row) => [...row]);

  steps.push(`<div class="step">Równania startowe:</div>`);
  steps.push(latexBlock(`\\begin{cases}
${fmt(m[0][0])}x + ${fmt(m[0][1])}y + ${fmt(m[0][2])}z = ${fmt(m[0][3])} \\\\
${fmt(m[1][0])}x + ${fmt(m[1][1])}y + ${fmt(m[1][2])}z = ${fmt(m[1][3])} \\\\
${fmt(m[2][0])}x + ${fmt(m[2][1])}y + ${fmt(m[2][2])}z = ${fmt(m[2][3])}
\\end{cases}`));

  // Eliminacja do postaci schodkowej
  let pivotRow = 0;
  for (let col = 0; col < 3 && pivotRow < 3; col += 1) {
    let candidate = -1;
    for (let r = pivotRow; r < 3; r += 1) {
      if (!isZero(m[r][col])) {
        candidate = r;
        break;
      }
    }
    if (candidate === -1) continue;

    if (candidate !== pivotRow) {
      [m[pivotRow], m[candidate]] = [m[candidate], m[pivotRow]];
      steps.push(`<div class="step">Zamieniamy wiersze, aby ustawic pivot w kolumnie ${col + 1}.</div>`);
      steps.push(latexBlock(`R_${pivotRow + 1} \\leftrightarrow R_${candidate + 1}`));
      steps.push(latexBlock(augmentedToLatex(m)));
    }

    for (let r = pivotRow + 1; r < 3; r += 1) {
      if (isZero(m[r][col])) continue;
      const factor = m[r][col] / m[pivotRow][col];
      for (let c = col; c < 4; c += 1) {
        m[r][c] = m[r][c] - factor * m[pivotRow][c];
      }
      steps.push(`<div class="step">Eliminujemy element pod pivotem: R${r + 1} <- R${r + 1} - (${fmt(factor)})R${pivotRow + 1}</div>`);
      steps.push(latexBlock(augmentedToLatex(m)));
    }
    pivotRow += 1;
  }

  const rankA = rankLeftPart(m);
  const rankAug = rankAugmented(m);

  if (rankA < rankAug) {
    gaussOutput.innerHTML = `
      <h3>Rozwiązanie metodą Gaussa 3x3</h3>
      ${steps.join("")}
      <p class="error">Układ sprzeczny - brak rozwiązań.</p>
    `;
    typesetMath();
    return;
  }

  if (rankA < 3) {
    gaussOutput.innerHTML = `
      <h3>Rozwiązanie metodą Gaussa 3x3</h3>
      ${steps.join("")}
      <p class="ok">Układ ma nieskończenie wiele rozwiązań.</p>
    `;
    typesetMath();
    return;
  }

  const z = m[2][3] / m[2][2];
  const y = (m[1][3] - m[1][2] * z) / m[1][1];
  const x = (m[0][3] - m[0][1] * y - m[0][2] * z) / m[0][0];

  steps.push(`<div class="step">Back substitution (podstawianie wsteczne):</div>`);
  steps.push(latexBlock(`z = \\frac{${fmt(m[2][3])}}{${fmt(m[2][2])}} = ${fmt(z)}`));
  steps.push(latexBlock(`y = \\frac{${fmt(m[1][3])} - ${fmt(m[1][2])}\\cdot ${fmt(z)}}{${fmt(m[1][1])}} = ${fmt(y)}`));
  steps.push(latexBlock(`x = \\frac{${fmt(m[0][3])} - ${fmt(m[0][1])}\\cdot ${fmt(y)} - ${fmt(m[0][2])}\\cdot ${fmt(z)}}{${fmt(m[0][0])}} = ${fmt(x)}`));
  steps.push(latexBlock(`\\boxed{x = ${fmt(x)},\\; y = ${fmt(y)},\\; z = ${fmt(z)}}`));

  gaussOutput.innerHTML = `
    <h3>Rozwiązanie metodą Gaussa 3x3</h3>
    ${steps.join("")}
    <p class="ok">Układ ma jedno rozwiązanie.</p>
  `;
  typesetMath();
}

function updateDeterminant() {
  const size = Number(detSize.value);
  const names = [];

  for (let r = 1; r <= size; r += 1) {
    for (let c = 1; c <= size; c += 1) {
      names.push(`m${r}${c}`);
    }
  }

  const values = names.map((name) => readNumberFromForm(detForm, name));
  if (values.some((v) => Number.isNaN(v))) {
    detOutput.innerHTML = `<p class="error">Błąd danych: wpisz poprawne liczby w macierzy.</p>`;
    typesetMath();
    return;
  }

  if (size === 2) {
    const [a, b, c, d] = values;
    const det = a * d - b * c;

    detOutput.innerHTML = `
      <h3>Obliczanie wyznacznika 2x2</h3>
      ${latexBlock(`A=\\begin{bmatrix}${fmt(a)} & ${fmt(b)} \\\\ ${fmt(c)} & ${fmt(d)}\\end{bmatrix}`)}
      <div class="step">Krok: wzór dla 2x2 to $\\det(A)=ad-bc$.</div>
      ${latexBlock(`\\det(A)=(${fmt(a)}\\cdot ${fmt(d)})-(${fmt(b)}\\cdot ${fmt(c)})`)}
      ${latexBlock(`\\det(A)=${fmt(a * d)}-${fmt(b * c)}=${fmt(det)}`)}
      ${latexBlock(`\\boxed{\\det(A)=${fmt(det)}}`)}
    `;
    typesetMath();
    return;
  }

  // Dla 3x3 pokazujemy metoda Sarrusa, krok po kroku
  const [a11, a12, a13, a21, a22, a23, a31, a32, a33] = values;

  const down = a11 * a22 * a33 + a12 * a23 * a31 + a13 * a21 * a32;
  const up = a13 * a22 * a31 + a11 * a23 * a32 + a12 * a21 * a33;
  const det = down - up;

  detOutput.innerHTML = `
    <h3>Obliczanie wyznacznika 3x3 (metoda Sarrusa)</h3>
    ${latexBlock(`A=\\begin{bmatrix}
${fmt(a11)} & ${fmt(a12)} & ${fmt(a13)} \\\\
${fmt(a21)} & ${fmt(a22)} & ${fmt(a23)} \\\\
${fmt(a31)} & ${fmt(a32)} & ${fmt(a33)}
\\end{bmatrix}`)}
    <div class="step">Krok 1: suma przekątnych "w dół".</div>
    ${latexBlock(`S_1=${fmt(a11)}\\cdot${fmt(a22)}\\cdot${fmt(a33)} + ${fmt(a12)}\\cdot${fmt(a23)}\\cdot${fmt(a31)} + ${fmt(a13)}\\cdot${fmt(a21)}\\cdot${fmt(a32)}=${fmt(down)}`)}
    <div class="step">Krok 2: suma przekątnych "w górę".</div>
    ${latexBlock(`S_2=${fmt(a13)}\\cdot${fmt(a22)}\\cdot${fmt(a31)} + ${fmt(a11)}\\cdot${fmt(a23)}\\cdot${fmt(a32)} + ${fmt(a12)}\\cdot${fmt(a21)}\\cdot${fmt(a33)}=${fmt(up)}`)}
    <div class="step">Krok 3: odejmujemy $S_1-S_2$.</div>
    ${latexBlock(`\\det(A)=S_1-S_2=${fmt(down)}-${fmt(up)}=${fmt(det)}`)}
    ${latexBlock(`\\boxed{\\det(A)=${fmt(det)}}`)}
  `;
  typesetMath();
}

function updateInverse() {
  const size = Number(invSize.value);
  const names = [];

  for (let r = 1; r <= size; r += 1) {
    for (let c = 1; c <= size; c += 1) {
      names.push(`i${r}${c}`);
    }
  }

  const values = names.map((name) => readNumberFromForm(invForm, name));

  if (values.some((v) => Number.isNaN(v))) {
    invOutput.innerHTML = `<p class="error">Błąd danych: wpisz poprawne liczby w macierzy.</p>`;
    typesetMath();
    return;
  }

  if (size === 2) {
    const [a, b, c, d] = values;
    const det = a * d - b * c;

    const steps = [];
    steps.push(`<h3>Wyznaczanie macierzy odwrotnej 2x2</h3>`);
    steps.push(latexBlock(`A=\\begin{bmatrix}${fmt(a)} & ${fmt(b)} \\\\ ${fmt(c)} & ${fmt(d)}\\end{bmatrix}`));
    steps.push(`<div class="step">Krok 1: liczymy wyznacznik.</div>`);
    steps.push(latexBlock(`\\det(A)=(${fmt(a)}\\cdot${fmt(d)})-(${fmt(b)}\\cdot${fmt(c)})=${fmt(det)}`));

    // Jezeli det=0 to macierz nie ma odwrotnej
    if (isZero(det)) {
      steps.push(`<p class="error">det(A)=0, więc macierz nie jest odwracalna i A^{-1} nie istnieje.</p>`);
      invOutput.innerHTML = steps.join("");
      typesetMath();
      return;
    }

    const inv11 = d / det;
    const inv12 = -b / det;
    const inv21 = -c / det;
    const inv22 = a / det;

    steps.push(`<div class="step">Krok 2: podstawiamy do wzoru na macierz odwrotną 2x2.</div>`);
    steps.push(latexBlock(`A^{-1}=\\frac{1}{\\det(A)}\\begin{bmatrix}d & -b \\\\ -c & a\\end{bmatrix}`));
    steps.push(latexBlock(`A^{-1}=\\frac{1}{${fmt(det)}}\\begin{bmatrix}${fmt(d)} & ${fmt(-b)} \\\\ ${fmt(-c)} & ${fmt(a)}\\end{bmatrix}`));
    steps.push(`<div class="step">Krok 3: wynik końcowy po podzieleniu elementów przez det(A).</div>`);
    steps.push(latexBlock(`A^{-1}=\\begin{bmatrix}${fmt(inv11)} & ${fmt(inv12)} \\\\ ${fmt(inv21)} & ${fmt(inv22)}\\end{bmatrix}`));
    steps.push(`<p class="ok">Macierz jest odwracalna (det(A) != 0).</p>`);

    invOutput.innerHTML = steps.join("");
    typesetMath();
    return;
  }

  // Wersja 3x3: cofaktory -> adjugata -> podzial przez det
  const [a11, a12, a13, a21, a22, a23, a31, a32, a33] = values;
  const det = a11 * a22 * a33 + a12 * a23 * a31 + a13 * a21 * a32
    - a13 * a22 * a31 - a11 * a23 * a32 - a12 * a21 * a33;

  const c11 = +(a22 * a33 - a23 * a32);
  const c12 = -(a21 * a33 - a23 * a31);
  const c13 = +(a21 * a32 - a22 * a31);
  const c21 = -(a12 * a33 - a13 * a32);
  const c22 = +(a11 * a33 - a13 * a31);
  const c23 = -(a11 * a32 - a12 * a31);
  const c31 = +(a12 * a23 - a13 * a22);
  const c32 = -(a11 * a23 - a13 * a21);
  const c33 = +(a11 * a22 - a12 * a21);

  const adj = [
    [c11, c21, c31],
    [c12, c22, c32],
    [c13, c23, c33]
  ];

  const inv = adj.map((row) => row.map((v) => v / det));
  const cofactor = [
    [c11, c12, c13],
    [c21, c22, c23],
    [c31, c32, c33]
  ];

  const steps = [];
  steps.push(`<h3>Wyznaczanie macierzy odwrotnej 3x3</h3>`);
  steps.push(latexBlock(`A=${matrixToLatex([
    [a11, a12, a13],
    [a21, a22, a23],
    [a31, a32, a33]
  ])}`));
  steps.push(`<div class="step">Krok 1: liczymy wyznacznik det(A) (jak w zadaniu z wyznacznikiem 3x3).</div>`);
  steps.push(latexBlock(`\\det(A)=${fmt(det)}`));

  if (isZero(det)) {
    steps.push(`<p class="error">det(A)=0, więc macierz nie jest odwracalna i A^{-1} nie istnieje.</p>`);
    invOutput.innerHTML = steps.join("");
    typesetMath();
    return;
  }

  steps.push(`<div class="step">Krok 2: liczymy macierz kofaktorów C.</div>`);
  steps.push(latexBlock(`C=${matrixToLatex(cofactor)}`));
  steps.push(`<div class="step">Krok 3: liczymy adj(A) = C^T (transpozycja).</div>`);
  steps.push(latexBlock(`\\operatorname{adj}(A)=${matrixToLatex(adj)}`));
  steps.push(`<div class="step">Krok 4: dzielimy adj(A) przez det(A).</div>`);
  steps.push(latexBlock(`A^{-1}=\\frac{1}{${fmt(det)}}\\cdot${matrixToLatex(adj)}`));
  steps.push(latexBlock(`A^{-1}=${matrixToLatex(inv)}`));
  steps.push(`<p class="ok">Macierz jest odwracalna (det(A) != 0).</p>`);

  invOutput.innerHTML = steps.join("");
  typesetMath();
}

function readNumberFromForm(form, name) {
  const field = form.elements.namedItem(name);
  if (!field) {
    return Number.NaN;
  }
  const value = Number(field.value);
  return Number.isFinite(value) ? value : Number.NaN;
}

function fmt(value) {
  const fixed = Number(value.toFixed(4));
  return String(fixed);
}

function isZero(v) {
  return Math.abs(v) < 1e-10;
}

function rankLeftPart(matrix) {
  let rank = 0;
  for (const row of matrix) {
    if (!row.slice(0, row.length - 1).every((v) => isZero(v))) {
      rank += 1;
    }
  }
  return rank;
}

function rankAugmented(matrix) {
  let rank = 0;
  for (const row of matrix) {
    if (!row.every((v) => isZero(v))) {
      rank += 1;
    }
  }
  return rank;
}

function augmentedToLatex(matrix) {
  const rows = matrix
    .map((row) => {
      const left = row.slice(0, row.length - 1).map((v) => fmt(v)).join(" & ");
      const right = fmt(row[row.length - 1]);
      return `${left} & | & ${right}`;
    })
    .join(" \\\\ ");
  return `\\begin{bmatrix}${rows}\\end{bmatrix}`;
}

function latexBlock(content) {
  return `<div class="step">\\[${content}\\]</div>`;
}

function matrixToLatex(matrix) {
  const rows = matrix
    .map((row) => row.map((value) => fmt(value)).join(" & "))
    .join(" \\\\ ");
  return `\\begin{bmatrix}${rows}\\end{bmatrix}`;
}

// Ta funkcja wymusza ponowne przeliczenie wzorów po zmianie HTML
function typesetMath() {
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise().catch(() => {
      // Tu celowo ignoruje błąd renderu, zeby UI sie nie zawiesil
    });
  }
}
