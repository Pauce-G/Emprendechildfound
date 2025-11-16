const content = document.getElementById("content");
      const bottomNav = document.getElementById("bottom-nav");
      const sidebar = document.getElementById("sidebar");
      const overlay = document.getElementById("overlay");
      let userData = {};

     function toggleSidebar() {
  // Verifica si la pantalla es mayor a 768px (tablet/desktop)
    if (window.innerWidth >= 768) {
      sidebar.classList.toggle("open");
      overlay.classList.toggle("show");
    }
  }


  window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
      sidebar.classList.remove("open");
      overlay.classList.remove("show");
    }
  });

      function updateSidebarProfile() {
        if (userData.name) {
          document.getElementById("userName").textContent = userData.name;
          document.getElementById("userCity").textContent =
            userData.city || "Ciudad";
          document.getElementById("userInitial").textContent = userData.name
            .charAt(0)
            .toUpperCase();
        }
      }

      function setView(htmlContent) {
        content.innerHTML = htmlContent;
        window.scrollTo(0, 0);
      }

      function showWelcome() {
        bottomNav.classList.add("hidden");
        sidebar.classList.add("hidden");
        document.getElementById("app-header").classList.add("hidden");
        const welcomeHTML = `
          <div class="flex flex-col items-center justify-center h-full text-center mt-20">
            <div class="mb-6 w-24 h-24 bg-gradient-to-br from-primary-childfund to-secondary-childfund rounded-full shadow-lg flex items-center justify-center">
              <span class="text-white text-4xl font-bold">CF</span>
            </div>
            <h2 class="text-3xl font-extrabold text-secondary-childfund mb-4">¡Bienvenido/a a EmprendeChildFund!</h2>
            <p class="text-gray-600 mb-8 max-w-sm">Tu plataforma digital para convertir tu esfuerzo en un negocio sostenible, adaptada para ti.</p>
            <div class="space-y-4 w-full max-w-xs">
              <button onclick="showRegistration()" class="w-full bg-primary-childfund text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-secondary-childfund transition duration-300">
                Crear Cuenta
              </button>
              <button onclick="showLogin()" class="w-full bg-white text-primary-childfund font-bold py-3 px-8 rounded-full shadow-lg border-2 border-primary-childfund hover:bg-accent-childfund hover:bg-opacity-10 transition duration-300">
                Ya tengo cuenta
              </button>
            </div>
          </div>
        `;
        setView(welcomeHTML);
      }

      function showLogin() {
        const loginHTML = `
          <div class="p-6 bg-white rounded-xl shadow-lg mt-8">
            <h2 class="text-2xl font-bold text-primary-childfund mb-6">Iniciar Sesión</h2>
            <form id="loginForm" onsubmit="event.preventDefault(); processLogin()">
              <div class="mb-4">
                <label class="block text-sm font-medium text-secondary-childfund">Correo Electrónico</label>
                <input type="email" id="loginEmail" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 border focus:border-primary-childfund focus:ring-primary-childfund">
              </div>
              <div class="mb-6">
                <label class="block text-sm font-medium text-secondary-childfund">Contraseña</label>
                <input type="password" id="loginPassword" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 border focus:border-primary-childfund focus:ring-primary-childfund">
              </div>
              <button type="submit" class="w-full bg-primary-childfund text-white font-bold py-3 rounded-xl shadow-md hover:bg-secondary-childfund transition duration-300">
                Iniciar Sesión
              </button>
              <button type="button" onclick="showWelcome()" class="w-full mt-3 text-gray-600 font-semibold py-2 hover:text-primary-childfund transition duration-300">
                Volver
              </button>
            </form>
          </div>
        `;
        setView(loginHTML);
      }

      function processLogin() {
        userData = {
          name: "Usuario Registrado",
          email: document.getElementById("loginEmail").value,
          city: "Santa Cruz",
          age: "25",
          rubro: "Comida",
          recommendedRoute: "Ruta 2",
        };
        updateSidebarProfile();
        showMainUI();
        showRouteSelection();
      }

      function showRegistration() {
        const registrationHTML = `
          <div class="p-6 bg-white rounded-xl shadow-lg mt-8">
            <button onclick="showWelcome()" class="mt-8 text-primary-childfund font-semibold hover:text-secondary-childfund hover:underline flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M19 12H5"></path><polyline points="12 19 5 12 12 5"></polyline></svg>
              Volver
            </button>
            <h2 class="text-2xl font-bold text-primary-childfund mb-6">Crea tu usuario</h2>
            <form id="registrationForm" onsubmit="event.preventDefault(); processRegistration()">
              <div class="mb-4">
                <label class="block text-sm font-medium text-secondary-childfund">Nombre Completo</label>
                <input type="text" id="regName" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 border focus:border-primary-childfund focus:ring-primary-childfund">
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-secondary-childfund">Edad</label>
                <input type="number" id="regAge" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 border focus:border-primary-childfund focus:ring-primary-childfund">
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-secondary-childfund">Ciudad / Municipio</label>
                <input type="text" id="regCity" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 border focus:border-primary-childfund focus:ring-primary-childfund">
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-secondary-childfund">Rubro del Emprendimiento</label>
                <select id="regRubro" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 border appearance-none focus:border-primary-childfund focus:ring-primary-childfund">
                  <option value="">Selecciona tu rubro</option>
                  <option value="Comida">Comida y Bebidas</option>
                  <option value="Artesanía">Artesanía / Manualidades</option>
                  <option value="Servicios">Servicios (ej. peluquería, reparación)</option>
                  <option value="Ventas">Ventas y Comercio</option>
                  <option value="Otros">Otros</option>
                </select>
              </div>
              <div class="mt-8 mb-4">
                <h3 class="text-lg font-semibold text-secondary-childfund mb-4">Datos de Acceso</h3>
                <label class="block text-sm font-medium text-secondary-childfund">Correo Electrónico</label>
                <input type="email" id="regEmail" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 border focus:border-primary-childfund focus:ring-primary-childfund">
              </div>
              <div class="mb-6">
                <label class="block text-sm font-medium text-secondary-childfund">Contraseña</label>
                <input type="password" id="regPassword" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 border focus:border-primary-childfund focus:ring-primary-childfund">
              </div>
              <button type="submit" class="w-full bg-primary-childfund text-white font-bold py-3 rounded-xl shadow-md hover:bg-secondary-childfund transition duration-300">
                Crear Cuenta y Continuar
              </button>
            </form>
          </div>
        `;
        setView(registrationHTML);
      }

      function processRegistration() {
        userData = {
          name: document.getElementById("regName").value,
          age: document.getElementById("regAge").value,
          city: document.getElementById("regCity").value,
          rubro: document.getElementById("regRubro").value,
          email: document.getElementById("regEmail").value,
        };
        updateSidebarProfile();
        showMainUI();
        showDiagnosisForm();
      }

      function showDiagnosisForm() {
        const questions = [
          "¿Ya vendes tu producto o servicio a clientes reales?",
          "¿Tienes un registro claro de tus ingresos y gastos (aunque sea en un cuaderno)?",
          "¿Ya has definido el precio de tu producto o servicio calculando tus costos?",
          "¿Sabes exactamente quién es tu cliente ideal (edad, dónde compra, etc.)?",
        ];

        let currentIndex = 0;

        const sliderHTML = `
          <div class="p-6 bg-white rounded-xl shadow-lg mt-8">
            <h2 class="text-2xl font-bold text-primary-childfund mb-4">¡Queremos Conocerte, ${
              userData.name || ""
            }!</h2>
            <p class="text-gray-600 mb-6">Responde estas 4 preguntas para que podamos recomendarte la ruta ideal para tu emprendimiento.</p>
            <form id="diagnosisSliderForm" onsubmit="event.preventDefault(); processDiagnosisSlider()">
              <div id="questionContainer" class="p-4 border-2 border-accent-childfund rounded-lg bg-accent-childfund bg-opacity-10 mb-4">
                <p id="questionText" class="font-semibold text-secondary-childfund mb-2"></p>
                <div class="flex space-x-4">
                  <label class="inline-flex items-center">
                    <input type="radio" name="answer" value="yes" required class="form-radio text-primary-childfund h-4 w-4">
                    <span class="ml-2 text-secondary-childfund">Sí</span>
                  </label>
                  <label class="inline-flex items-center">
                    <input type="radio" name="answer" value="no" class="form-radio text-primary-childfund h-4 w-4">
                    <span class="ml-2 text-secondary-childfund">No</span>
                  </label>
                </div>
              </div>
              <div class="flex justify-between">
                <button type="button" id="prevBtn" class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400" disabled>Anterior</button>
                <button type="button" id="nextBtn" class="bg-primary-childfund text-white px-4 py-2 rounded-lg hover:bg-secondary-childfund">Siguiente</button>
              </div>
              <button type="submit" id="submitBtn" class="w-full mt-6 bg-primary-childfund text-white font-bold py-3 rounded-xl shadow-md hover:bg-secondary-childfund transition duration-300 hidden">
                Analizar mi Etapa
              </button>
            </form>
          </div>
        `;

        setView(sliderHTML);

        const questionText = document.getElementById("questionText");
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");
        const submitBtn = document.getElementById("submitBtn");
        const answers = Array(questions.length).fill(null);

        function updateQuestion() {
          questionText.textContent = `${currentIndex + 1}. ${
            questions[currentIndex]
          }`;
          prevBtn.disabled = currentIndex === 0;
          nextBtn.style.display =
            currentIndex === questions.length - 1 ? "none" : "inline-block";
          submitBtn.style.display =
            currentIndex === questions.length - 1 ? "block" : "none";
          const previousAnswer = answers[currentIndex];
          const radios = document.querySelectorAll('input[name="answer"]');
          radios.forEach((r) => (r.checked = r.value === previousAnswer));
        }

        prevBtn.onclick = () => {
          const selected = document.querySelector(
            'input[name="answer"]:checked'
          );
          if (selected) answers[currentIndex] = selected.value;
          if (currentIndex > 0) currentIndex--;
          updateQuestion();
        };

        nextBtn.onclick = () => {
          const selected = document.querySelector(
            'input[name="answer"]:checked'
          );
          if (!selected) {
            alert("Por favor selecciona una opción antes de continuar.");
            return;
          }
          answers[currentIndex] = selected.value;
          currentIndex++;
          updateQuestion();
        };

        function processDiagnosisSlider() {
          const selected = document.querySelector(
            'input[name="answer"]:checked'
          );
          if (selected) answers[currentIndex] = selected.value;
          const yesCount = answers.filter((a) => a === "yes").length;
          let recommendedRoute = "Ruta 1";
          if (yesCount >= 4) recommendedRoute = "Ruta 3";
          else if (yesCount >= 2) recommendedRoute = "Ruta 2";
          userData.recommendedRoute = recommendedRoute;
          showRouteSelection();
        }

        window.processDiagnosisSlider = processDiagnosisSlider;
        updateQuestion();
      }

      function showRouteSelection() {
        bottomNav.classList.remove("hidden");
        const welcomeText = userData.recommendedRoute
          ? `<p class="text-lg font-semibold text-secondary-childfund mb-4 p-3 bg-accent-childfund bg-opacity-20 border-l-4 border-primary-childfund rounded-md">¡Hola ${userData.name}! Tu emprendimiento está en etapa inicial. <span class="font-bold text-primary-childfund">Te recomendamos empezar por: ${userData.recommendedRoute}</span>.</p>`
          : `<p class="text-lg font-semibold text-gray-800 mb-4">Bienvenido/a al menú principal, ${userData.name}.</p>`;

        const routesHTML = `
          <h2 class="text-3xl font-extrabold text-secondary-childfund mb-6">Tu Ruta de emprendimiento</h2>
          ${welcomeText}
          <div class="space-y-6">
            ${createRouteCard(
              "Ruta 1",
              "Estoy Empezando",
              "Pre-Incubación",
              "Crea las bases de tu modelo de negocio y valida tu idea.",
              "50%",
              "M1"
            )}
            ${createRouteCard(
              "Ruta 2",
              "Tengo un Negocio",
              "Incubación",
              "Aprende a calcular costos, gestionar ventas y formalizarte.",
              "15%",
              "M2"
            )}
            ${createRouteCard(
              "Ruta 3",
              "Quiero Crecer",
              "Post-Incubación",
              "Estrategias de expansión, inversión y gestión de equipos.",
              "0%",
              "M3"
            )}
          </div>
        `;
        setView(routesHTML);
      }

      function createRouteCard(
        title,
        subtitle,
        stage,
        description,
        progress,
        id
      ) {
        const isRecommended =
          userData.recommendedRoute === title
            ? "border-primary-childfund shadow-xl"
            : "border-gray-200";
        const progressValue = parseInt(progress.replace("%", ""));
        return `
          <div onclick="showModuleContent('${id}')" class="route-card bg-white p-6 rounded-xl border-2 ${isRecommended} cursor-pointer">
            <div class="flex justify-between items-start mb-3">
              <h3 class="text-xl font-bold text-secondary-childfund">${title}: ${subtitle}</h3>
              <span class="text-sm font-medium text-gray-500 bg-primary-childfund bg-opacity-20 px-3 py-1 rounded-full">
                        ${stage} </span>
              </div>
            <p class="text-gray-500 mb-4 text-sm">${description}</p>
            <div class="mt-4">
              <p class="text-xs font-medium text-secondary-childfund mb-1">Progreso Total: ${progress}</p>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-gradient-to-r from-primary-childfund to-accent-childfund h-2.5 rounded-full" style="width: ${progressValue}%"></div>
              </div>
            </div>
          </div>
        `;
      }

      function showModuleContent(moduleId) {
        const title =
          moduleId === "M1"
            ? "Estoy Empezando"
            : moduleId === "M2"
            ? "Tengo un Negocio"
            : "Quiero Crecer";

        // Definir módulos según la ruta
        let moduleName = "";
        let moduleDescription = "";

        if (moduleId === "M1") {
          moduleName = "Módulo 1: Descubre tu Propósito";
          moduleDescription =
            "Antes de vender, descubre por qué quieres emprender y a quién ayudarás.";
        } else if (moduleId === "M2") {
          moduleName = "Módulo 1: Ordena tu Negocio";
          moduleDescription =
            "Aprende a calcular costos, gestionar ventas y formalizarte.";
        } else {
          moduleName = "Módulo 1: Estrategias de Crecimiento";
          moduleDescription = "Expande tu negocio con estrategias avanzadas.";
        }

        const moduleHTML = `
          <div class="p-4 bg-white rounded-xl shadow-lg mt-4">
            <button onclick="showRouteSelection()" class="mt-8 text-primary-childfund font-semibold hover:text-secondary-childfund hover:underline flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M19 12H5"></path><polyline points="12 19 5 12 12 5"></polyline></svg>
              Volver a Rutas
            </button>
            <br>
            <h2 class="text-3xl font-bold text-primary-childfund mb-2">${title}</h2>
            <p class="text-gray-500 mb-1">${moduleName}</p>
            <p class="text-sm text-gray-600 mb-6">${moduleDescription}</p>
            <div class="space-y-6">
              ${
                moduleId === "M1"
                  ? `
              <!-- LECCIÓN 1: Por qué emprender -->
              <div class="p-4 border-2 border-primary-childfund rounded-lg bg-primary-childfund bg-opacity-5">
                <h3 class="flex items-center text-lg font-bold text-primary-childfund mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M12 20h9"></path><circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline></svg>
                  1. Mi Motivo para Emprender (5 min)
                </h3>
                
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div class="w-full">
                    <iframe class="w-full rounded-lg" style="height:315px;" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
                  
                  <div class="p-4 rounded-lg bg-white shadow-md offline-ready">
                    <h3 class="text-lg font-bold text-secondary-childfund mb-2">Contenido Clave</h3>
                    <div class="text-sm text-secondary-childfund mt-3">
                      <p class="font-medium mb-3">Emprender no es solo "hacer plata". Es importante que sepas:</p>
                      <ul class="list-inside space-y-2">
                        <li><strong>Tu "Por Qué":</strong> ¿Qué te motiva realmente?</li>
                        <li><strong> - Presión familiar:</strong> Está bien querer ayudar, pero también cuida tu proyecto</li>
                        <li><strong> - Es un proceso:</strong> No vas a ganar millones mañana, y está bien</li>
                        <li><strong> - Tu valor:</strong> Tu trabajo tiene valor, aunque recién empieces</li>
                      </ul>
                      <button class="mt-4 text-xs font-semibold text-white bg-primary-childfund hover:bg-secondary-childfund px-3 py-1 rounded-full">📄 Descargar Ejercicio</button>
                    </div>
                  </div>
                </div>
              </div>

            <!-- LECCIÓN 2: Quiz Interactivo -->
            <div class="p-4 border-2 border-accent-childfund rounded-lg bg-accent-childfund bg-opacity-10">
              <h3 class="flex items-center text-lg font-bold text-secondary-childfund mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                2. Mini cuestionario (3 preguntas)
              </h3>
              <p class="text-sm text-secondary-childfund mb-4">
                Responde 3 preguntas para verificar tu comprensión del contenido.
              </p>
              <button onclick="showQuizModule()" class="w-full bg-primary-childfund text-white px-4 py-3 rounded-lg font-semibold hover:bg-secondary-childfund transition">
                Comenzar Evaluación
              </button>
            </div>

              

             

              <!-- LECCIÓN 3: Tarea Práctica -->
              <div class="p-4 border-2 border-primary-childfund rounded-lg bg-primary-childfund bg-opacity-5">
                <h3 class="flex items-center text-lg font-bold text-primary-childfund mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4z"></path>
                    </svg>
                    3. Tarea: Describe a tu Cliente Ideal
                </h3>

                <p class="text-sm text-secondary-childfund mb-3">
                    Piensa en una persona real a quien le venderías. Describe:
                </p>
                <textarea class="w-full h-32 border-2 border-gray-300 
                  focus:border-primary-childfund p-2 rounded-lg text-sm"
            placeholder="Ejemplo: María, 30 años, trabaja de 8 a 5, sale tarde de su trabajo, no tiene tiempo de cocinar, busca algo rico y rápido cerca de su oficina..."></textarea>
            <button onclick="openRecursosModal()"
                class="w-full text-primary-childfund border border-primary-childfund 
                        px-4 py-2 rounded-lg font-semibold hover:bg-primary-childfund 
                        hover:text-white transition duration-300 mt-2 flex items-center justify-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" 
                fill="none" stroke="currentColor" stroke-width="2" 
                stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>Ver Plantillas y Ejemplos</span>
        </button>
        </div>
              `
                  : moduleId === "M2"
                  ? `
              <!-- Lección 1: Video + Contenido Teórico lado a lado -->
              <div class="p-4 border-2 border-primary-childfund rounded-lg bg-primary-childfund bg-opacity-5">
                <h3 class="flex items-center text-lg font-bold text-primary-childfund mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  1. Video Lección: Cálculo de Costos (7 min)
                </h3>
                
                <!-- Grid de 2 columnas en pantallas grandes, 1 columna en móviles -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <!-- Video a la izquierda -->
                  <div class="w-full">
                    <iframe class="w-full rounded-lg" style="height:315px;" src="https://www.youtube.com/embed/ZQgXyiozmYY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
                  
                  <!-- Contenido teórico a la derecha -->
                  <div class="p-4 rounded-lg bg-white shadow-md offline-ready">
                    <h3 class="flex items-center text-lg font-bold text-secondary-childfund mb-2 cursor-pointer" onclick="toggleTextContent()">
                      Contenido Clave
                    </h3>
                    <div id="textContentBody" class="text-sm text-secondary-childfund mt-3">
                      <p class="font-medium mb-3">Para saber si ganas o pierdes, necesitas conocer tus costos:</p>
                      <ul class="list-disc list-inside space-y-2">
                        <li><strong>Materia Prima:</strong> Lo que compras para producir</li>
                        <li><strong>Mano de Obra:</strong> Tu tiempo vale dinero</li>
                        <li><strong>Gastos Fijos:</strong> Luz, alquiler, transporte</li>
                        <li><strong>Precio de Venta:</strong> Debe cubrir costos + ganancia</li>
                      </ul>
                      <button class="mt-4 text-xs font-semibold text-white bg-primary-childfund hover:bg-secondary-childfund px-3 py-1 rounded-full">📄 Descargar Plantilla</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Lección 2: Mini-Quiz -->
              <div class="p-4 border-2 border-accent-childfund rounded-lg bg-accent-childfund bg-opacity-10">
                <h3 class="flex items-center text-lg font-bold text-secondary-childfund mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                  2. Mini-cuestionario: ¿Entendiste los costos? (3 preguntas)
                </h3>
                <form>
                  <p class="text-sm font-medium text-secondary-childfund mb-2">Pregunta 1: Si vendo un jugo a Bs. 5 y mis costos son Bs. 4, ¿cuánto gano?</p>
                  <div class="space-y-1 mb-3">
                    <label class="block text-sm text-secondary-childfund"><input type="radio" name="q1" class="mr-2 text-primary-childfund"> Bs. 5</label>
                    <label class="block text-sm text-secondary-childfund"><input type="radio" name="q1" class="mr-2 text-primary-childfund"> Bs. 1</label>
                    <label class="block text-sm text-secondary-childfund"><input type="radio" name="q1" class="mr-2 text-primary-childfund"> Bs. 4</label>
                  </div>
                  <button type="submit" class="text-sm text-white bg-primary-childfund px-3 py-1 rounded-full hover:bg-secondary-childfund">Verificar</button>
                </form>
              </div>

              <!-- Lección 3: Tarea Práctica -->
              <div class="p-4 border-2 border-primary-childfund rounded-lg bg-primary-childfund bg-opacity-5">
                <h3 class="flex items-center text-lg font-bold text-primary-childfund mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4z"></path>
                    </svg>
                    3. Tarea: Calcula tu Precio Real
                </h3>

                <p class="text-sm text-secondary-childfund mb-3">
                    Escribe el listado de TODOS tus costos para un producto:
                </p>
                <textarea class="w-full h-32 border-2 border-gray-300 
                  focus:border-primary-childfund p-2 rounded-lg text-sm"
            placeholder="Ejemplo: Jugo de naranja - Naranjas: 2bs, Azúcar: 0.5bs, Vaso: 0.3bs, Mi tiempo: 1bs, Transporte: 0.5bs = TOTAL: 4.3bs"></textarea>
            <button onclick="openRecursosModal1()"
                class="w-full text-primary-childfund border border-primary-childfund 
                        px-4 py-2 rounded-lg font-semibold hover:bg-primary-childfund 
                        hover:text-white transition duration-300 mt-2 flex items-center justify-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" 
                fill="none" stroke="currentColor" stroke-width="2" 
                stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>Ver Calculadora de Costos</span>
        </button>
        </div> `
                  : `
              <!-- RUTA 3: Contenido de Post-Incubación -->
              <div class="p-4 border-2 border-primary-childfund rounded-lg bg-primary-childfund bg-opacity-5">
                <h3 class="flex items-center text-lg font-bold text-primary-childfund mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  1. Video: Estrategias de Expansión (10 min)
                </h3>
                
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div class="w-full">
                    <iframe class="w-full rounded-lg" style="height:315px;" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
                  
                  <div class="p-4 rounded-lg bg-white shadow-md offline-ready">
                    <h3 class="text-lg font-bold text-secondary-childfund mb-2">Contenido Clave</h3>
                    <div class="text-sm text-secondary-childfund mt-3">
                      <p class="font-medium mb-3">Para crecer necesitas:</p>
                      <ul class="list-disc list-inside space-y-2">
                        <li><strong>Análisis de Mercado:</strong> ¿Dónde hay más oportunidades?</li>
                        <li><strong>Nuevos Canales:</strong> Ventas online, distribuidores</li>
                        <li><strong>Alianzas:</strong> Colaborar con otros negocios</li>
                        <li><strong>Inversión:</strong> Cuándo y cómo buscar financiamiento</li>
                      </ul>
                      <button class="mt-4 text-xs font-semibold text-white bg-primary-childfund hover:bg-secondary-childfund px-3 py-1 rounded-full">📄 Descargar Guía</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4 border-2 border-accent-childfund rounded-lg bg-accent-childfund bg-opacity-10">
                <h3 class="flex items-center text-lg font-bold text-secondary-childfund mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                  2. Ejercicio: Plan de Expansión
                </h3>
                <p class="text-sm text-secondary-childfund mb-3">
                  Escribe 3 acciones concretas para crecer en los próximos 6 meses:
                </p>
                <textarea class="w-full h-32 border-2 border-gray-300 
                  focus:border-primary-childfund p-2 rounded-lg text-sm"
            placeholder="Ejemplo: 1. Abrir un punto de venta en otro barrio, 2. Crear catálogo digital en redes, 3. Contratar un ayudante..."></textarea>
              </div>
              `
              }
        </div>
        <button type="button" onclick="saveModuleProgress('${moduleId}', 100)" 
                class="w-full text-white bg-primary-childfund px-4 py-2 rounded-lg font-semibold hover:bg-secondary-childfund transition duration-300 mt-6">
            Completar Módulo
        </button>
          </div>
        `;
        setView(moduleHTML);
      }

      function toggleTextContent() {
        const body = document.getElementById("textContentBody");
        if (body) body.classList.toggle("hidden");
      }

      function showCommunity() {
        document
          .querySelector("#bottom-nav button:nth-child(1)")
          .classList.remove("text-primary-childfund");
        document
          .querySelector("#bottom-nav button:nth-child(2)")
          .classList.add("text-primary-childfund");
        document
          .querySelector("#bottom-nav button:nth-child(3)")
          .classList.remove("text-primary-childfund");

        const communityHTML = `
          <div class="p-4 bg-white rounded-xl shadow-lg mt-4">
            <h2 class="text-3xl font-bold text-secondary-childfund mb-6">Foros y Comunidad Emprendedora</h2>
            <div class="bg-accent-childfund bg-opacity-20 p-4 rounded-lg mb-6 border-l-4 border-primary-childfund">
              <p class="font-semibold text-secondary-childfund">¡Conéctate! Comparte lo que aprendiste, resuelve dudas y conoce otras experiencias.</p>
            </div>

            <div class="border-b pb-4 mb-4">
              <p class="text-sm font-bold text-primary-childfund">Kevin M. (La Paz)</p>
              <p class="text-secondary-childfund my-2">Acabo de terminar el módulo de costos y por fin calculé bien el precio de mis jugos. ¡Me di cuenta que estaba perdiendo plata! ¿Alguien más tiene un negocio de comida y le costó calcular la mano de obra?</p>
              <div class="flex space-x-4 text-sm text-gray-500 mt-2">
                <span>❤️ 3 Me Gusta</span>
                <span>💬 5 Comentarios</span>
              </div>
            </div>

            <div class="border-b pb-4 mb-4">
              <p class="text-sm font-bold text-secondary-childfund">Profesional Invitado: Lic. Ana G.</p>
              <p class="text-secondary-childfund my-2">¡Excelente pregunta, Kevin! La mano de obra se calcula por tiempo. Un tip: si usas productos de temporada, haz un estimado de costos por semana y luego ajústalo mensualmente. ¡Felicidades por tu avance!</p>
              <div class="flex space-x-4 text-sm text-gray-500 mt-2">
                <span>👏 12 Me Gusta</span>
                <span>💬 1 Comentario</span>
              </div>
            </div>

            <textarea class="w-full h-20 border-2 border-gray-300 focus:border-primary-childfund p-2 rounded-lg text-sm mt-4" placeholder="Escribe tu comentario o duda aquí..."></textarea>
            <button class="w-full text-white bg-primary-childfund px-4 py-2 rounded-lg font-semibold hover:bg-secondary-childfund transition duration-300 mt-2">Publicar</button>
          </div>
        `;
        setView(communityHTML);
      }

      function showEvents() {
        document
          .querySelector("#bottom-nav button:nth-child(1)")
          .classList.remove("text-primary-childfund");
        document
          .querySelector("#bottom-nav button:nth-child(2)")
          .classList.remove("text-primary-childfund");
        document
          .querySelector("#bottom-nav button:nth-child(3)")
          .classList.add("text-primary-childfund");

        const eventsHTML = `
          <div class="p-4 bg-white rounded-xl shadow-lg mt-4">
            <h2 class="text-3xl font-bold text-secondary-childfund mb-6">Eventos y Mentorías Exclusivas</h2>
            <p class="text-gray-600 mb-6">Regístrate a capacitaciones y mentorías mensuales en alianza con empresas del rubro.</p>

            <div class="bg-gradient-to-br from-primary-childfund to-secondary-childfund text-white p-6 rounded-xl shadow-xl mb-6">
              <h3 class="text-xl font-bold mb-2">¡ALERTA DE EVENTO!</h3>
              <div class="flex items-center space-x-4 mb-4 border-b border-accent-childfund border-opacity-30 pb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"></path><path d="M12 6v6l4 2"></path></svg>
                <div>
                  <p class="text-lg font-semibold">Taller: Digitaliza tus Ventas</p>
                  <p class="text-sm">🗓️ 28 de Noviembre | ⌚ 19:00</p>
                </div>
              </div>
              <p class="text-sm italic mb-4">En colaboración con TechBolivia. Aprende a usar WhatsApp Business y Catálogos de Facebook para vender más.</p>
              <a href="#" target="_blank" class="block text-center bg-accent-childfund text-secondary-childfund font-bold py-2 rounded-lg hover:bg-white transition duration-300">
                Regístrate Aquí 
              </a>
            </div>

            <div class="p-4 border-2 border-primary-childfund rounded-xl bg-accent-childfund bg-opacity-10">
              <h3 class="flex items-center text-xl font-bold text-secondary-childfund mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 text-primary-childfund"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 22 10"></polyline></svg>
                Solicita Mentoría 
              </h3>
              <p class="text-sm text-secondary-childfund mb-4">Agenda una sesión de 30 minutos con un experto en tu rubro. Cupos limitados.</p>
              <button class="w-full text-white bg-primary-childfund px-4 py-2 rounded-lg font-semibold hover:bg-secondary-childfund transition duration-300">
                Ver Formulario de Solicitud
              </button>
            </div>
          </div>
        `;
        setView(eventsHTML);
      }

      function showProfile() {
        let medalsHTML = "";
        if (userData.progress) {
          for (const [moduleId, progress] of Object.entries(
            userData.progress
          )) {
            if (progress >= 100) {
              medalsHTML += `<div class="bg-yellow-300 text-secondary-childfund px-3 py-1 rounded-full inline-block mr-2 mb-2">🏅 ${moduleId} Completado</div>`;
            }
          }
        }
        bottomNav.classList.remove("hidden");
        const profileHTML = `
          <div class="p-4 bg-white rounded-xl shadow-lg mt-4">
            <h2 class="text-3xl font-bold text-secondary-childfund mb-6">Mi Perfil</h2>
            <div class="flex flex-col items-center mb-6">
              <div class="w-24 h-24 bg-gradient-to-br from-primary-childfund to-accent-childfund rounded-full flex items-center justify-center text-white font-bold text-4xl mb-4 shadow-lg">
                ${userData.name ? userData.name.charAt(0).toUpperCase() : "U"}
              </div>
              <h3 class="text-2xl font-bold text-secondary-childfund">${
                userData.name || "Usuario"
              }</h3>
              <p class="text-gray-500">${
                userData.email || "usuario@email.com"
              }</p>
            </div>
            <div class="space-y-4">
              <div class="p-4 bg-accent-childfund bg-opacity-10 rounded-lg border-l-4 border-primary-childfund">
                <p class="text-sm text-secondary-childfund opacity-80">Ciudad</p>
                <p class="font-semibold text-secondary-childfund">${
                  userData.city || "No especificada"
                }</p>
              </div>
              <div class="p-4 bg-accent-childfund bg-opacity-10 rounded-lg border-l-4 border-primary-childfund">
                <p class="text-sm text-secondary-childfund opacity-80">Edad</p>
                <p class="font-semibold text-secondary-childfund">${
                  userData.age || "No especificada"
                } años</p>
              </div>
              <div class="p-4 bg-accent-childfund bg-opacity-10 rounded-lg border-l-4 border-primary-childfund">
                <p class="text-sm text-secondary-childfund opacity-80">Rubro</p>
                <p class="font-semibold text-secondary-childfund">${
                  userData.rubro || "No especificado"
                }</p>
              </div>
              <div class="p-4 bg-primary-childfund bg-opacity-10 rounded-lg border-l-4 border-primary-childfund">
                <p class="text-sm text-secondary-childfund opacity-80">Ruta Recomendada</p>
                <p class="font-semibold text-primary-childfund">${
                  userData.recommendedRoute || "Pendiente de diagnóstico"
                }</p>
              </div>
            <div class="p-4 bg-primary-childfund bg-opacity-10 rounded-lg border-l-4 border-primary-childfund">
                <div>
                    <h3 class="font-semibold mb-2">Mis Logros:</h3>
                    ${
                      medalsHTML ||
                      "<p>No has completado ningún módulo todavía.</p>"
                    }
                </div>
            </div>
              
            </div>
            <button class="w-full mt-6 bg-primary-childfund text-white font-bold py-3 rounded-xl shadow-md hover:bg-secondary-childfund transition duration-300">
              Editar Perfil
            </button>
          </div>
        `;
        setView(profileHTML);
      }

      function logout() {
        if (confirm("¿Deseas cerrar sesión?")) {
          userData = {};
          updateSidebarProfile();
          showWelcome();
          if (sidebar.classList.contains("open")) {
            toggleSidebar();
          }
        }
      }

      function openRecursosModal() {
        document.getElementById("recursosModal").classList.remove("hidden");
        document.getElementById("recursosModal").classList.add("flex");
      }

      function closeRecursosModal() {
        document.getElementById("recursosModal").classList.add("hidden");
        document.getElementById("recursosModal").classList.remove("flex");
      }
      function openRecursosModal1() {
        document.getElementById("recursosModal1").classList.remove("hidden");
        document.getElementById("recursosModal1").classList.add("flex");
      }

      function closeRecursosModal1() {
        document.getElementById("recursosModal1").classList.add("hidden");
        document.getElementById("recursosModal1").classList.remove("flex");
      }

      function showMainUI() {
        document.getElementById("app-header").classList.remove("hidden");
        sidebar.classList.remove("hidden");
      }

      function saveModuleProgress(moduleId, progressPercent) {
        if (!userData.progress) userData.progress = {};
        userData.progress[moduleId] = progressPercent;

        if (progressPercent >= 100 && !userData.badges) {
          userData.badges = [];
        }
        if (progressPercent >= 100) {
          const badgeName = `${moduleId}_completo`;
          if (!userData.badges.includes(badgeName)) {
            userData.badges.push(badgeName);
            showBadgeModal(moduleId);
          }
        } else {
          alert(
            "¡Avance guardado! Has completado el " +
              progressPercent +
              "% del módulo."
          );
        }
      }
      function showBadgeModal(moduleId) {
        const badgeModal = `
          <div id="badgeModal" class="fixed inset-0 flex bg-black/50 backdrop-blur-sm z-50 justify-center items-center">
            <div class="bg-white w-96 rounded-2xl shadow-2xl p-8 text-center animate-bounce">
              <div class="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <span class="text-5xl">🏆</span>
              </div>
              <h2 class="text-2xl font-bold text-primary-childfund mb-2">¡Felicitaciones!</h2>
              <p class="text-gray-700 mb-4">Has completado el módulo ${moduleId}</p>
              <div class="bg-accent-childfund bg-opacity-20 p-4 rounded-lg mb-4">
                <p class="font-semibold text-secondary-childfund">🎖️ Nueva Insignia Desbloqueada</p>
              </div>
              <button onclick="closeBadgeModal()" class="w-full bg-primary-childfund text-white py-3 rounded-xl font-bold hover:bg-secondary-childfund transition">
                Continuar
              </button>
            </div>
          </div>
        `;
        document.body.insertAdjacentHTML("beforeend", badgeModal);
      }

      function closeBadgeModal() {
        const modal = document.getElementById("badgeModal");
        if (modal) modal.remove();
        showRouteSelection();
      }

      function toggleSubmenu(id) {
        const submenu = document.getElementById(id);
        submenu.classList.toggle("hidden");

        // Rotar flecha
        const arrow = document.getElementById("arrowRutas");
        arrow.classList.toggle("rotate-180");
      }

      function showMentorship() {
        bottomNav.classList.remove("hidden");
        const mentorshipHTML = `
          <div class="p-4 bg-white rounded-xl shadow-lg mt-4">
            <h2 class="text-3xl font-bold text-secondary-childfund mb-4">Mentoría y acompañamiento</h2>
            <div class="bg-white text-primary-childfund p-6 rounded-xl mb-6 shadow">
            </div>

            <div class="mb-6">
              <h3 class="font-bold text-secondary-childfund mb-3">Mentores Disponibles</h3>
              
              <div class="border-2 border-primary-childfund rounded-xl p-4 mb-4 bg-accent-childfund bg-opacity-10">
                <div class="flex items-center space-x-4 mb-3">
                  <div class="w-16 h-16 bg-primary-childfund bg-opacity-70 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    AG
                  </div>
                  <div>
                    <h4 class="font-bold text-secondary-childfund">Lic. Ana González</h4>
                    <p class="text-sm text-gray-600">Especialista en Gestión Financiera</p>
                    <div class="flex items-center text-yellow-500 text-sm mt-1">
                      ⭐⭐⭐⭐⭐ <span class="text-gray-600 ml-1">(4.9)</span>
                    </div>
                  </div>
                </div>
                <p class="text-sm text-secondary-childfund mb-3">Experta en costos, precios y finanzas para emprendimientos de comida y servicios</p>
                <button onclick="requestMentorship('Ana González')" class="w-full bg-primary-childfund text-white py-2 rounded-lg font-semibold hover:bg-secondary-childfund transition">
                  Solicitar Mentoría
                </button>
              </div>
              <div class="border-2 border-gray-200 rounded-xl p-4 mb-4">
                <div class="flex items-center space-x-4 mb-3">
                  <div class="w-16 h-16 bg-primary-childfund bg-opacity-70 rounded-full flex items-center justify-center text-white text-xl font-bold">CM</div>
                  <div>
                    <h4 class="font-bold text-secondary-childfund">Carlos Martínez</h4>
                    <p class="text-sm text-gray-600">Experto en Marketing Digital</p>
                    <div class="flex items-center text-yellow-500 text-sm mt-1">
                      ⭐⭐⭐⭐⭐ <span class="text-gray-600 ml-1">(5.0)</span>
                    </div>
                  </div>
                </div>
                <p class="text-sm text-secondary-childfund mb-3">Especialista en redes sociales, ventas online y posicionamiento de marca</p>
                <button onclick="requestMentorship('Carlos Martínez')" class="w-full bg-primary-childfund text-white py-2 rounded-lg font-semibold hover:bg-secondary-childfund transition">
                  Solicitar Mentoría
                </button>
                
              </div>
            </div>

            <div class="bg-accent-childfund bg-opacity-20 p-4 rounded-lg border-l-4 border-primary-childfund">
              <h3 class="font-bold text-secondary-childfund mb-2">📅 Mis Sesiones Programadas</h3>
              <p class="text-sm text-gray-600">No tienes sesiones programadas todavía. ¡Solicita tu primera mentoría!</p>
            </div>
            <br><br>
          </div>
        `;
        setView(mentorshipHTML);
      }

      function requestMentorship(mentorName) {
        alert(
          `Solicitud enviada a ${mentorName}. Te contactaremos pronto para agendar tu sesión.`
        );
      }

      function showSoftSkillModule(skill) {
        const skills = {
          autoconocimiento: {
            title: "Autoconocimiento",
            description:
              "Identifica tus fortalezas, valores y motivaciones profundas",
            video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            content: `
              <h3 class="font-bold text-lg mb-2">¿Por qué es importante?</h3>
              <p class="mb-4">Conocerte te ayuda a tomar mejores decisiones y mantenerte motivado en momentos difíciles.</p>
              <h3 class="font-bold text-lg mb-2">Ejercicio Práctico:</h3>
              <p class="mb-2">Responde honestamente:</p>
              <ul class="list-disc list-inside space-y-1 text-sm">
                <li>¿Qué hago mejor que la mayoría?</li>
                <li>¿Qué me apasiona realmente?</li>
                <li>¿Cuáles son mis valores más importantes?</li>
              </ul>
            `,
          },
          liderazgo: {
            title: "Liderazgo Emprendedor",
            description: "Aprende a guiar tu negocio y equipo con propósito",
            video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            content: `
              <h3 class="font-bold text-lg mb-2">Líder vs Jefe</h3>
              <p class="mb-4">Un líder inspira, un jefe solo ordena. Como emprendedor, tú estableces la cultura de tu negocio.</p>
              <h3 class="font-bold text-lg mb-2">Ejercicio:</h3>
              <p class="text-sm">Escribe 3 valores que quieres que definan tu emprendimiento</p>
            `,
          },
          comunicacion: {
            title: "Comunicación Asertiva",
            description: "Expresa tus ideas con claridad, empatía y firmeza",
            video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            content: `
              <h3 class="font-bold text-lg mb-2">Los 3 estilos de comunicación</h3>
              <ul class="list-disc list-inside space-y-2 text-sm mb-4">
                <li><strong>Pasivo:</strong> No defiende sus derechos</li>
                <li><strong>Agresivo:</strong> Defiende sus derechos pisoteando los de otros</li>
                <li><strong>Asertivo:</strong> Defiende sus derechos respetando a los demás</li>
              </ul>
              <p class="text-sm">Practica decir "no" cuando sea necesario, sin sentirte culpable.</p>
            `,
          },
          estres: {
            title: "Manejo del Estrés",
            description:
              "Técnicas prácticas para manejar la presión del día a día",
            video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            content: `
              <h3 class="font-bold text-lg mb-2">Señales de estrés no saludable:</h3>
              <ul class="list-disc list-inside space-y-1 text-sm mb-4">
                <li>Dificultad para dormir</li>
                <li>Irritabilidad constante</li>
                <li>Dolores de cabeza frecuentes</li>
                <li>Falta de concentración</li>
              </ul>
              <h3 class="font-bold text-lg mb-2">Técnica rápida: Respiración 4-7-8</h3>
              <p class="text-sm">Inhala 4 seg → Retén 7 seg → Exhala 8 seg</p>
            `,
          },
          autoestima: {
            title: "Autoestima Emprendedora",
            description: "Fortalece tu confianza y reconoce tu valor",
            video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            content: `
              <h3 class="font-bold text-lg mb-2">Tu trabajo tiene valor</h3>
              <p class="mb-4">Muchos emprendedores sufren del "síndrome del impostor". Recuerda: estás aprendiendo y cada paso cuenta.</p>
              <h3 class="font-bold text-lg mb-2">Ejercicio diario:</h3>
              <p class="text-sm">Cada noche, escribe 3 cosas que hiciste bien hoy en tu emprendimiento.</p>
            `,
          },
          equilibrio: {
            title: "Equilibrio Vida-Negocio",
            description: "Aprende a crecer sin descuidar tu bienestar",
            video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            content: `
              <h3 class="font-bold text-lg mb-2">El emprendimiento es un maratón, no una carrera de 100 metros</h3>
              <p class="mb-4">Es imposible sostener ritmos agotadores por mucho tiempo. El descanso NO es pérdida de tiempo.</p>
              <h3 class="font-bold text-lg mb-2">Establece límites:</h3>
              <ul class="list-disc list-inside space-y-1 text-sm">
                <li>Define tu horario de trabajo</li>
                <li>Respeta tu tiempo familiar</li>
                <li>Programa al menos 1 día de descanso</li>
              </ul>
            `,
          },
        };

        const selectedSkill = skills[skill];
        const skillHTML = `
          <div class="p-4 bg-white rounded-xl shadow-lg mt-4">
            <button onclick="showRouteSelection()" class="text-primary-childfund font-semibold hover:underline flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M19 12H5"></path><polyline points="12 19 5 12 12 5"></polyline></svg>
              Volver a Rutas
            </button>
            
            <h2 class="text-2xl font-bold text-primary-childfund mb-2">${selectedSkill.title}</h2>
            <p class="text-gray-600 mb-6">${selectedSkill.description}</p>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
              <div class="w-full">
                <iframe class="w-full rounded-lg" style="height:250px;" src="${selectedSkill.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              
              <div class="p-4 rounded-lg bg-accent-childfund bg-opacity-10 border-2 border-primary-childfund overflow-y-auto" style="max-height:250px;">
                ${selectedSkill.content}
              </div>
            </div>

            <div class="bg-white border-2 border-primary-childfund rounded-xl p-4">
              <h3 class="font-bold text-secondary-childfund mb-3">✍️ Reflexión Personal</h3>
              <textarea class="w-full h-32 border-2 border-gray-300 focus:border-primary-childfund p-3 rounded-lg text-sm" 
                placeholder="Escribe tus reflexiones sobre este módulo... ¿Qué aprendiste? ¿Cómo lo aplicarás?"></textarea>
              <button onclick="alert('¡Reflexión guardada!'); showRouteSelection();" class="w-full mt-3 bg-primary-childfund text-white py-2 rounded-lg font-semibold hover:bg-secondary-childfund transition">
                Guardar y Completar
              </button>
            </div>
          </div>
        `;
        setView(skillHTML);
      }

      function showFondoSemilla() {
        bottomNav.classList.remove("hidden");
        const fondoHTML = `
          <div class="p-4 bg-white rounded-xl shadow-lg mt-4">
            <h2 class="text-3xl font-bold text-secondary-childfund mb-4">💰 Fondo Semilla Rotatorio</h2>
            
            <div class="bg-gradient-to-r from-green-500 to-primary-childfund text-white p-6 rounded-xl mb-6 shadow-lg">
              <h3 class="text-xl font-bold mb-2">¿Qué es el Fondo Semilla Rotatorio?</h3>
              <p class="text-sm">Capital inicial sin intereses que pagas en 12 cuotas mensuales. Al finalizar, el dinero vuelve a circular para ayudar a otro emprendedor.</p>
            </div>

            <div class="space-y-4 mb-6">
              <div class="bg-accent-childfund bg-opacity-20 p-4 rounded-lg border-l-4 border-primary-childfund">
                <h4 class="font-bold text-secondary-childfund mb-2"> Beneficios</h4>
                <ul class="text-sm space-y-1">
                  <li>• Sin intereses - Solo devuelves lo que recibes</li>
                  <li>• 12 meses de plazo</li>
                </ul>
              </div>

              <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <h4 class="font-bold text-secondary-childfund mb-2"> Requisitos</h4>
                <ul class="text-sm space-y-1">
                  <li>• Haber completado al menos el 50% de una ruta</li>
                  <li>• Tener un plan de negocio validado</li>
                  <li>• Compromiso de pago mensual</li>
                  <li>• Participar en seguimiento mensual</li>
                </ul>
              </div>
            </div>

            ${
              userData.progress && Object.keys(userData.progress).length > 0
                ? `
              <div class="bg-primary-childfund bg-opacity-10 p-4 rounded-lg border-2 border-primary-childfund mb-4">
                <h4 class="font-bold text-primary-childfund mb-2">Tu Estado Actual</h4>
                <p class="text-sm text-secondary-childfund mb-3">Has completado módulos en tu ruta. ¡Sigue avanzando para ser elegible!</p>
                <div class="w-full bg-gray-200 rounded-full h-3">
                  <div class="bg-primary-childfund h-3 rounded-full" style="width: 50%"></div>
                </div>
                <p class="text-xs text-gray-600 mt-1">50% del progreso necesario</p>
              </div>
            `
                : `
              <div class="bg-gray-100 p-4 rounded-lg border-2 border-gray-300 mb-4">
                <p class="text-sm text-gray-700">⚠️ Necesitas completar al menos el 50% de una ruta para aplicar al fondo semilla.</p>
              </div>
            `
            }

            <button onclick="showFondoApplication()" class="w-full bg-primary-childfund text-white font-bold py-3 rounded-xl hover:bg-secondary-childfund transition mb-4">
              Solicitar Fondo Semilla
            </button>

            <div class="border-t-2 pt-4">
              <h4 class="font-bold text-secondary-childfund mb-3">📊 Historias de Éxito</h4>
              <div class="space-y-3">
                <div class="bg-white border rounded-lg p-3">
                  <p class="text-sm font-semibold text-primary-childfund">María - Repostería (Santa Cruz)</p>
                  <p class="text-xs text-gray-600 mt-1">"Recibí Bs. 5,000 para comprar un horno industrial. En 8 meses ya pagué todo y ahora produzco el triple."</p>
                </div>
                <div class="bg-white border rounded-lg p-3">
                  <p class="text-sm font-semibold text-primary-childfund">Carlos - Carpintería (La Paz)</p>
                  <p class="text-xs text-gray-600 mt-1">"El fondo me permitió comprar herramientas profesionales. Pagué en tiempo y ahora puedo tomar trabajos más grandes."</p>
                </div>
              </div>
            </div>
          </div>
        `;
        setView(fondoHTML);
      }
      function showFondoApplication() {
        const applicationHTML = `
          <div class="p-6 bg-white rounded-xl shadow-lg mt-4">
            <button onclick="showFondoSemilla()" class="text-primary-childfund font-semibold hover:underline flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M19 12H5"></path><polyline points="12 19 5 12 12 5"></polyline></svg>
              Volver
            </button>
            
            <h2 class="text-2xl font-bold text-primary-childfund mb-6">Solicitud de Fondo Semilla</h2>
            
            <form onsubmit="event.preventDefault(); submitFondoApplication();">
              <div class="mb-4">
                <label class="block text-sm font-medium text-secondary-childfund mb-1">Monto Solicitado (Bs.)</label>
                <select required class="w-full border-2 border-gray-300 rounded-lg p-3 focus:border-primary-childfund">
                  <option value="">Selecciona el monto</option>
                  <option value="2000">Bs. 2,000</option>
                  <option value="3000">Bs. 3,000</option>
                  <option value="5000">Bs. 5,000</option>
                </select>
              </div>

              <div class="mb-4">
                <label class="block text-sm font-medium text-secondary-childfund mb-1">¿Para qué usarás el dinero?</label>
                <textarea required class="w-full h-24 border-2 border-gray-300 rounded-lg p-3 focus:border-primary-childfund text-sm" 
                  placeholder="Ejemplo: Comprar materia prima, herramientas, equipo, etc."></textarea>
              </div>

              <div class="mb-4">
                <label class="block text-sm font-medium text-secondary-childfund mb-1">¿Cómo generarás ingresos para pagar las cuotas?</label>
                <textarea required class="w-full h-24 border-2 border-gray-300 rounded-lg p-3 focus:border-primary-childfund text-sm" 
                  placeholder="Describe tu plan de ventas o ingresos"></textarea>
              </div>

              <div class="mb-6">
                <label class="block text-sm font-medium text-secondary-childfund mb-1">Cuota Mensual Estimada</label>
                <input type="text" readonly value="Según monto seleccionado" class="w-full border-2 border-gray-200 rounded-lg p-3 bg-gray-50">
                <p class="text-xs text-gray-500 mt-1">Ejemplo: Bs. 5,000 = 12 cuotas de Bs. 417</p>
              </div>

              <div class="bg-accent-childfund bg-opacity-20 p-4 rounded-lg mb-4">
                <label class="flex items-start space-x-2">
                  <input type="checkbox" required class="mt-1">
                  <span class="text-sm text-secondary-childfund">Acepto el compromiso de pago mensual y participar en seguimientos con mi mentor asignado</span>
                </label>
              </div>

              <button type="submit" class="w-full bg-primary-childfund text-white font-bold py-3 rounded-xl hover:bg-secondary-childfund transition">
                Enviar Solicitud
              </button>
            </form>
          </div>
        `;
        setView(applicationHTML);
      }

      function submitFondoApplication() {
        alert(
          "¡Solicitud enviada! Nuestro equipo evaluará tu aplicación y te contactaremos en 5-7 días hábiles."
        );
        showFondoSemilla();
      }

      window.onload = showWelcome;

      // Agrega esta función al final de tu app.js

function showQuizModule() {
  // Definir las preguntas con sus respuestas correctas
  const quizQuestions = [
    {
      question: "¿Qué significa mi 'Por Qué' al emprender?",
      options: [
        "Es la razón principal que me mueve a empezar un negocio, lo que me hace querer ayudar a otros o mejorar algo, no solo ganar dinero.",
        "Es solo la cantidad de plata que quiero ganar.",
        "Es solamente el producto o servicio que voy a vender."
      ],
      correctAnswer: 0 // índice de la respuesta correcta (0 = primera opción)
    },
    {
      question: "¿Por qué es importante saber mi 'Por Qué'?",
      options: [
        "Porque me ayuda a seguir adelante cuando haya problemas y tomar buenas decisiones en mi negocio.",
        "Solo es para decir algo bonito.",
        "No importa mientras venda."
      ],
      correctAnswer: 0
    },
    {
      question: "¿Cuál de estas frases SÍ es un buen motivo para emprender?",
      options: [
        "Quiero ayudar a las personas ofreciéndoles algo que les haga la vida más fácil o mejor.",
        "Vendo solo porque necesito dinero.",
        "Vendo lo mismo que todos venden, sin pensar en quién lo necesita."
      ],
      correctAnswer: 0
    }
  ];

  let currentQuestionIndex = 0;
  let userAnswers = Array(quizQuestions.length).fill(null);
  let score = 0;

  const quizHTML = `
    <div class="p-4 bg-white rounded-xl shadow-lg mt-4">
      <button onclick="showModuleContent('M1')" class="text-primary-childfund font-semibold hover:text-secondary-childfund hover:underline flex items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M19 12H5"></path><polyline points="12 19 5 12 12 5"></polyline></svg>
        Volver al Módulo
      </button>

      <h3 class="text-2xl font-bold text-primary-childfund mb-4">📝 Evaluación: Mi "Por Qué"</h3>
      
      <!-- Indicador de progreso -->
      <div class="mb-6">
        <div class="flex justify-between text-sm text-gray-600 mb-2">
          <span>Pregunta <span id="currentQuestionNum">1</span> de ${quizQuestions.length}</span>
          <span id="progressText">0%</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div id="quizProgressBar" class="bg-primary-childfund h-2 rounded-full transition-all duration-300" style="width: 0%"></div>
        </div>
      </div>

      <!-- Contenedor de la pregunta -->
      <div id="quizQuestionContainer" class="p-6 border-2 border-accent-childfund rounded-lg bg-accent-childfund bg-opacity-10 mb-6">
        <p id="quizQuestionText" class="text-lg font-bold text-secondary-childfund mb-4"></p>
        <div id="quizOptionsContainer" class="space-y-3"></div>
        <div id="feedbackMessage" class="hidden mt-4 p-3 rounded-lg"></div>
      </div>

      <!-- Botones de navegación -->
      <div class="flex justify-between mb-4">
        <button id="prevQuizBtn" class="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition" disabled>
          Anterior
        </button>
        <button id="nextQuizBtn" class="bg-primary-childfund text-white px-6 py-2 rounded-lg hover:bg-secondary-childfund transition hidden">
          Siguiente
        </button>
        <button id="verifyBtn" class="bg-accent-childfund text-secondary-childfund px-6 py-2 rounded-lg hover:bg-primary-childfund hover:text-white transition font-semibold">
          Verificar Respuesta
        </button>
      </div>

      <!-- Botón de finalizar (oculto inicialmente) -->
      <button id="finishQuizBtn" class="w-full bg-primary-childfund text-white font-bold py-3 rounded-xl hover:bg-secondary-childfund transition hidden">
        Ver Resultados
      </button>
    </div>
  `;

  setView(quizHTML);

  const questionText = document.getElementById("quizQuestionText");
  const optionsContainer = document.getElementById("quizOptionsContainer");
  const feedbackMessage = document.getElementById("feedbackMessage");
  const prevBtn = document.getElementById("prevQuizBtn");
  const nextBtn = document.getElementById("nextQuizBtn");
  const verifyBtn = document.getElementById("verifyBtn");
  const finishBtn = document.getElementById("finishQuizBtn");
  const progressBar = document.getElementById("quizProgressBar");
  const currentQuestionNum = document.getElementById("currentQuestionNum");
  const progressText = document.getElementById("progressText");

  function updateQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    // Actualizar texto de la pregunta
    questionText.textContent = currentQuestion.question;
    
    // Actualizar progreso
    const progress = ((currentQuestionIndex) / quizQuestions.length) * 100;
    progressBar.style.width = progress + "%";
    progressText.textContent = Math.round(progress) + "%";
    currentQuestionNum.textContent = currentQuestionIndex + 1;
    
    // Crear opciones de respuesta
    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
      const optionDiv = document.createElement("div");
      optionDiv.className = "flex items-start space-x-3 p-3 border-2 border-gray-300 rounded-lg hover:border-primary-childfund transition cursor-pointer";
      optionDiv.innerHTML = `
        <input type="radio" name="quizAnswer" value="${index}" id="option${index}" class="mt-1 form-radio text-primary-childfund h-5 w-5">
        <label for="option${index}" class="text-sm text-secondary-childfund cursor-pointer flex-1">${option}</label>
      `;
      
      optionDiv.onclick = () => {
        document.getElementById(`option${index}`).checked = true;
      };
      
      optionsContainer.appendChild(optionDiv);
    });
    
    // Restaurar respuesta previa si existe
    if (userAnswers[currentQuestionIndex] !== null) {
      document.querySelector(`input[value="${userAnswers[currentQuestionIndex]}"]`).checked = true;
      showFeedback(userAnswers[currentQuestionIndex] === currentQuestion.correctAnswer);
      verifyBtn.classList.add("hidden");
      nextBtn.classList.remove("hidden");
    } else {
      feedbackMessage.classList.add("hidden");
      verifyBtn.classList.remove("hidden");
      nextBtn.classList.add("hidden");
    }
    
    // Actualizar estado de botones
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // Mostrar botón finalizar en la última pregunta
    if (currentQuestionIndex === quizQuestions.length - 1 && userAnswers[currentQuestionIndex] !== null) {
      nextBtn.classList.add("hidden");
      finishBtn.classList.remove("hidden");
    } else {
      finishBtn.classList.add("hidden");
    }
  }

  function showFeedback(isCorrect) {
    feedbackMessage.classList.remove("hidden");
    
    if (isCorrect) {
      feedbackMessage.className = "mt-4 p-3 rounded-lg bg-green-100 border-2 border-green-500";
      feedbackMessage.innerHTML = `
        <div class="flex items-center space-x-2">
          <span class="text-2xl">✅</span>
          <div>
            <p class="font-bold text-green-700">¡Correcto!</p>
            <p class="text-sm text-green-600">Muy bien, has entendido el concepto.</p>
          </div>
        </div>
      `;
    } else {
      const correctAnswer = quizQuestions[currentQuestionIndex].options[quizQuestions[currentQuestionIndex].correctAnswer];
      feedbackMessage.className = "mt-4 p-3 rounded-lg bg-red-100 border-2 border-red-500";
      feedbackMessage.innerHTML = `
        <div class="flex items-start space-x-2">
          <span class="text-2xl">❌</span>
          <div>
            <p class="font-bold text-red-700">Incorrecto</p>
            <p class="text-sm text-red-600 mt-1"><strong>Respuesta correcta:</strong> ${correctAnswer}</p>
          </div>
        </div>
      `;
    }
  }

  // Evento: Verificar respuesta
  verifyBtn.onclick = () => {
    const selectedOption = document.querySelector('input[name="quizAnswer"]:checked');
    
    if (!selectedOption) {
      alert("Por favor selecciona una respuesta antes de verificar.");
      return;
    }
    
    const selectedValue = parseInt(selectedOption.value);
    userAnswers[currentQuestionIndex] = selectedValue;
    
    const isCorrect = selectedValue === quizQuestions[currentQuestionIndex].correctAnswer;
    if (isCorrect) score++;
    
    showFeedback(isCorrect);
    
    // Ocultar botón verificar y mostrar siguiente
    verifyBtn.classList.add("hidden");
    
    if (currentQuestionIndex === quizQuestions.length - 1) {
      finishBtn.classList.remove("hidden");
    } else {
      nextBtn.classList.remove("hidden");
    }
  };

  // Evento: Siguiente pregunta
  nextBtn.onclick = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      currentQuestionIndex++;
      updateQuestion();
    }
  };

  // Evento: Pregunta anterior
  prevBtn.onclick = () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      updateQuestion();
    }
  };

  // Evento: Finalizar quiz
  finishBtn.onclick = () => {
    showQuizResults();
  };

  function showQuizResults() {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    const passed = percentage >= 70;
    
    const resultsHTML = `
      <div class="p-6 bg-white rounded-xl shadow-lg mt-4">
        <div class="text-center">
          <div class="w-32 h-32 mx-auto mb-6 ${passed ? 'bg-green-500' : 'bg-yellow-400'} rounded-full flex items-center justify-center shadow-lg">
            <span class="text-6xl">${passed ? '🎉' : '📚'}</span>
          </div>
          
          <h2 class="text-3xl font-bold ${passed ? 'text-green-600' : 'text-yellow-600'} mb-4">
            ${passed ? '¡Felicitaciones!' : '¡Sigue Practicando!'}
          </h2>
          
          <div class="mb-6 p-6 bg-accent-childfund bg-opacity-20 rounded-xl">
            <p class="text-5xl font-bold text-primary-childfund mb-2">${percentage}%</p>
            <p class="text-gray-600">Respuestas correctas: ${score} de ${quizQuestions.length}</p>
          </div>
          
          ${passed ? `
            <p class="text-gray-700 mb-6">Has demostrado que comprendes bien los conceptos de este módulo. ¡Continúa así!</p>
            <button onclick="showModuleContent('M1')" class="w-full bg-primary-childfund text-white font-bold py-3 rounded-xl hover:bg-secondary-childfund transition mb-3">
              Continuar con el Módulo
            </button>
          ` : `
            <p class="text-gray-700 mb-6">Te recomendamos revisar el contenido del video nuevamente para reforzar tu aprendizaje.</p>
            <button onclick="showModuleContent('M1')" class="w-full bg-yellow-300 text-white font-bold py-3 rounded-xl hover:bg-yellow-600 transition mb-3">
              Revisar Contenido
            </button>
            <button onclick="showQuizModule()" class="w-full bg-primary-childfund text-white font-bold py-3 rounded-xl hover:bg-secondary-childfund transition">
              Reintentar Evaluación
            </button>
          `}
        </div>
      </div>
    `;
    
    setView(resultsHTML);
    
    // Guardar progreso si aprobó
    if (passed) {
      if (!userData.progress) userData.progress = {};
      userData.progress.M1_quiz = 100;
    }
  }



}

  


// Hacer la función accesible globalmente
window.showQuizModule = showQuizModule;