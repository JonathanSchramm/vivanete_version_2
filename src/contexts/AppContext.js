import React, { createContext, useContext, useReducer, useMemo } from 'react';

// Valores iniciais do estado
const initialState = {
  isDarkMode: true, // Modo escuro ativo por padrão
  currentPage: null,
  userPreferences: null,
  isNavOpen: false
};

// Tipos de ação para o reducer
const ActionTypes = {
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  TOGGLE_NAV: 'TOGGLE_NAV',
  SET_USER_PREFERENCES: 'SET_USER_PREFERENCES'
};

// Reducer para manipular as mudanças de estado
function appReducer(state, action) {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };
    case ActionTypes.TOGGLE_NAV:
      return {
        ...state,
        isNavOpen: action.payload !== undefined ? action.payload : !state.isNavOpen
      };
    case ActionTypes.SET_USER_PREFERENCES:
      return {
        ...state,
        userPreferences: {
          ...state.userPreferences,
          ...action.payload
        }
      };
    default:
      return state;
  }
}

// Criar o contexto
const AppContext = createContext();

// Provedor de contexto que envolve a aplicação
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  // Memoizando ações para evitar recriações desnecessárias
  const actions = useMemo(() => ({
    setCurrentPage: (page) => dispatch({ 
      type: ActionTypes.SET_CURRENT_PAGE, 
      payload: page 
    }),
    toggleNav: (isOpen) => dispatch({ 
      type: ActionTypes.TOGGLE_NAV, 
      payload: isOpen 
    }),
    setUserPreferences: (preferences) => dispatch({
      type: ActionTypes.SET_USER_PREFERENCES,
      payload: preferences
    })
  }), []);
  
  // Memoizando o valor do contexto para evitar renderizações desnecessárias
  const contextValue = useMemo(() => ({ 
    ...state, 
    ...actions 
  }), [state, actions]);
  
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

// Hook personalizado para usar o contexto
export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext deve ser usado dentro de um AppProvider');
  }
  return context;
}

// Exportando também o contexto diretamente se necessário
export default AppContext; 