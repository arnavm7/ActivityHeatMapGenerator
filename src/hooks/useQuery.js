// Imports
import { useLocation } from 'react-router-dom';

// useQuery hook.
export default function useQuery() {
  return new URLSearchParams(useLocation().search);
}