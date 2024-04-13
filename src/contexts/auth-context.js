import { createContext, useContext, useEffect, useReducer, useRef } from 'react';
import PropTypes from 'prop-types';
// import { connectToDB } from 'src/pages/api/database';
import { User } from 'src/lib/models';

const HANDLERS = {
  INITIALIZE: 'INITIALIZE',
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT',
  ERROR: 'ERROR' // Added error handler for centralized error management
};

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
  error: null // Added error state for centralized error management
};

const handlers = {
  [HANDLERS.INITIALIZE]: (state, action) => {
    const user = action.payload;

    return {
      ...state,
      ...(
        // if payload (user) is provided, then is authenticated
        user
          ? ({
            isAuthenticated: true,
            isLoading: false,
            user
          })
          : ({
            isLoading: false
          })
      )
    };
  },
  [HANDLERS.SIGN_IN]: (state, action) => {
    const user = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
      error: null // Clear any previous error on successful sign-in
    };
  },
  [HANDLERS.SIGN_OUT]: (state) => {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
      error: null // Clear any previous error on sign-out
    };
  },
  [HANDLERS.ERROR]: (state, action) => {
    return {
      ...state,
      error: action.payload // Set error state for centralized error handling
    };
  }
};

const reducer = (state, action) => (
  handlers[action.type] ? handlers[action.type](state, action) : state
);

// The role of this context is to propagate authentication state through the App tree.

export const AuthContext = createContext({ undefined });

export const AuthProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const initialized = useRef(false);

  const initialize = async () => {
    // Prevent from calling twice in development mode with React.StrictMode enabled
    if (initialized.current) {
      return;
    }

    initialized.current = true;

    let isAuthenticated = false;

    try {
      // await connectToDB(); // Establish database connection
    } catch (err) {
      console.error('Error initializing authentication:', err);
      dispatch({ type: HANDLERS.ERROR, payload: err.message }); // Handle initialization error centrally
    }

    // Check authentication state based on your authentication logic (e.g., JWTs)
    // Replace this placeholder with your actual implementation

    if (isAuthenticated) {
      // If authenticated, attempt to fetch user from database
      try {
        const user = await User.findOne({ /* your criteria to identify the user */ }); // Assuming you have a way to identify the authenticated user
        if (user) {
          dispatch({
            type: HANDLERS.INITIALIZE,
            payload: user
          });
        } else {
          console.warn('User not found in database. Clearing authentication.');
          dispatch({ type: HANDLERS.SIGN_OUT });
        }
      } catch (err) {
        console.error('Error fetching user:', err);
        dispatch({ type: HANDLERS.ERROR, payload: err.message });
      }
    } else {
      dispatch({ type: HANDLERS.INITIALIZE }); // Set initial state if not authenticated
    }
  };

  useEffect(
    () => {
      initialize();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  //   try {
  //     window.sessionStorage.setItem('authenticated', 'true');
  //   } catch (err) {
  //     console.error(err);
  //   }

  //   const user = {
  //     id: '5e86809283e28b96d2d38537',
  //     avatar: '/assets/avatars/avatar-anika-visser.png',
  //     name: 'Programmer Shams',
  //     email: 'ssdeen313@gmail.com'
  //   };

  //   dispatch({
  //     type: HANDLERS.SIGN_IN,
  //     payload: user
  //   });
  // };

const signIn = async (email, password) => {
    try {
      // await connectToDB();

      const user = await User.findOne({ email });

      if (!user) {
        throw new Error('Invalid email or password');
      }

      // Compare password securely using bcrypt
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        throw new Error('Invalid email or password');
      }

      // Upon successful sign-in, consider using a secure mechanism like JWTs (JSON Web Tokens) for authentication.
      // Replace this placeholder with your JWT generation and storage logic.

      dispatch({
        type: HANDLERS.SIGN_IN,
        payload: user
      });
    } catch (err) {
      console.error('Error signing in:', err);
      dispatch({ type: HANDLERS.ERROR, payload: err.message });
    }
  };

  const signUp = async (email, name, password) => {
    try {
      // await connectToDB(); // Establish database connection

      const existingUser = await User.findOne({ email });

      if (existingUser) {
        throw new Error('Email already exists');
      }

      // Hash the password for security
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        email,
        name,
        password: hashedPassword
      });

      await newUser.save(); // Save the user to the database

      // Upon successful sign-up, consider using a secure mechanism like JWTs (JSON Web Tokens) for authentication.
      // Replace this placeholder with your JWT generation and storage logic.

      dispatch({
        type: HANDLERS.SIGN_IN,
        payload: newUser // Use the newly created user object
      });
    } catch (err) {
      console.error('Error signing up:', err);
      dispatch({ type: HANDLERS.ERROR, payload: err.message });
    }
  };

  const signOut = async () => {
    // Upon sign-out, consider clearing any JWT tokens or authentication state.
    // Replace this placeholder with your JWT clearing logic.

    dispatch({ type: HANDLERS.SIGN_OUT });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        signUp,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node
};

export const AuthConsumer = AuthContext.Consumer;

export const useAuthContext = () => useContext(AuthContext);
