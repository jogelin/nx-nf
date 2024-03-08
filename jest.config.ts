import { getJestProjects } from '@nx/jest';

export default {
  projects: getJestProjects(),
  passWithNoTests: true,
};
