import { zipObject } from 'lodash';

const ACTION_TYPES = [
  'ADD_QUERY_FILTER',
  'BLUR_SEARCH',
  'BUFFER_NODES_DELTA',
  'CACHE_ZOOM_STATE',
  'CHANGE_INSTANCE',
  'CHANGE_TOPOLOGY_OPTION',
  'CLEAR_CONTROL_ERROR',
  'CLEAR_NODES_DELTA_BUFFER',
  'CLICK_BACKGROUND',
  'CLICK_CLOSE_DETAILS',
  'CLICK_CLOSE_TERMINAL',
  'CLICK_FORCE_RELAYOUT',
  'CLICK_NODE',
  'CLICK_PAUSE_UPDATE',
  'CLICK_RELATIVE',
  'CLICK_RESUME_UPDATE',
  'CLICK_SHOW_TOPOLOGY_FOR_NODE',
  'CLICK_TERMINAL',
  'CLICK_TOPOLOGY',
  'CLOSE_WEBSOCKET',
  'CONSOLIDATE_NODES_DELTA_BUFFER',
  'DEBUG_TOOLBAR_INTERFERING',
  'DESELECT_NODE',
  'DO_CONTROL_ERROR',
  'DO_CONTROL_SUCCESS',
  'DO_CONTROL',
  'DO_SEARCH',
  'ENTER_EDGE',
  'ENTER_NODE',
  'FOCUS_SEARCH',
  'HIDE_HELP',
  'HOVER_METRIC',
  'LEAVE_EDGE',
  'LEAVE_NODE',
  'OPEN_WEBSOCKET',
  'PIN_METRIC',
  'PIN_NETWORK',
  'PIN_SEARCH',
  'POP_NODES_DELTA_BUFFER',
  'RECEIVE_API_DETAILS',
  'RECEIVE_CONTROL_NODE_REMOVED',
  'RECEIVE_CONTROL_PIPE_STATUS',
  'RECEIVE_CONTROL_PIPE',
  'RECEIVE_ERROR',
  'RECEIVE_NODE_DETAILS',
  'RECEIVE_NODES_DELTA',
  'RECEIVE_NODES_FOR_TOPOLOGY',
  'RECEIVE_NODES',
  'RECEIVE_NOT_FOUND',
  'RECEIVE_SERVICE_IMAGES',
  'RECEIVE_TOPOLOGIES',
  'REQUEST_SERVICE_IMAGES',
  'RESET_LOCAL_VIEW_STATE',
  'ROUTE_TOPOLOGY',
  'SELECT_NETWORK',
  'SET_EXPORTING_GRAPH',
  'SET_RECEIVED_NODES_DELTA',
  'SET_VIEW_MODE',
  'SET_VIEWPORT_DIMENSIONS',
  'SHOW_HELP',
  'SHOW_NETWORKS',
  'SHUTDOWN',
  'SORT_ORDER_CHANGED',
  'TIME_TRAVEL_MILLISECONDS_IN_PAST',
  'TIME_TRAVEL_START_TRANSITION',
  'TOGGLE_CONTRAST_MODE',
  'TOGGLE_TROUBLESHOOTING_MENU',
  'UNHOVER_METRIC',
  'UNPIN_METRIC',
  'UNPIN_NETWORK',
  'UNPIN_SEARCH',
];

export default zipObject(ACTION_TYPES, ACTION_TYPES);
