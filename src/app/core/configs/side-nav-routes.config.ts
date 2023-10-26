import { Navigation } from "src/app/shared/common/enum";


export const navBarRoutes = {
  downArrowIcon: 'keyboard_arrow_down',
  UsersConfig: {
    Components: [
      {
        label: 'Users',
        path: `./${Navigation.User}`,
      },
      {
        label: 'Roles',
        path: `./${Navigation.Role}`,
      },
    ],
    label: 'Users',
    icon: 'supervisor_account',
  },

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
      // {
      //   label: 'Location',
      //   path: `./${Navigation.Masters}/${Navigation.Location}`,
      // },
      // {
      //   label: 'Stream',
      //   path: `./${Navigation.Masters}/${Navigation.Stream}`,
      // },
      // {
      //   label: 'Technology',
      //   path: `./${Navigation.Masters}/${Navigation.Technology}`,
      // },
    ],
    label: 'Manage Master',
    icon: '	manage_accounts',
  },


  Websites: {
    Components: [
      {
        label: 'Add New Portal',
        path: `${Navigation.Portal}/${Navigation.clients}`,
      },
    ],
    label: 'Websites',
    icon: 'mouse',
  },

  Utilities: {
    Components: [
      {
        label: 'lookups',
        path: `./${Navigation.Utilities}/${Navigation.Lookups}`,
      },
      {
        label: 'Languages',
        path: `./${Navigation.Utilities}/${Navigation.Languages}`,
      },
    ],
    label: 'Utilities',
    icon: 'perm_data_setting',
  },

};
