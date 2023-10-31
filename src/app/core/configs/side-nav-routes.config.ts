import { Navigation } from "src/app/shared/common/enum";


export const navBarRoutes = {

  Groups: {
    label: 'Groups',
    path: `./${Navigation.Groups}`,
    icon: 'perm_data_setting',
  },

  Test: {
    label: 'Test',
    path: `./${Navigation.Test}`,
    icon: 'perm_data_setting',
  },

  Candidates: {
    label: 'Candidates',
    path: `./${Navigation.Candidate}`,
    icon: 'perm_data_setting',
  },

  Results: {
    label: 'Results',
    path: `./${Navigation.Results}`,
    icon: 'perm_data_setting',
  },

  Questions: {
    label: 'Questions',
    path: `./${Navigation.Questions}`,
    icon: 'perm_data_setting',
  },

  Masters: {
    Components: [
      {
        label: 'Degree',
        path: `./${Navigation.Masters}/${Navigation.Degree}`,
      },
      {
        label: 'College',
        path: `./${Navigation.Masters}/${Navigation.College}`,
      },
      {
        label: 'Profile',
        path: `./${Navigation.Masters}/${Navigation.Profile}`,
      },
      {
        label: 'Topics',
        path: `./${Navigation.Masters}/${Navigation.Topics}`,
      },

    ],
    label: 'Manage Master',
    icon: '	manage_accounts',
  },

};
