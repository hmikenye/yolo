
project-root/
# Vagrantfile
vagrant vm using ubuntu 20.04 (jeff geerlings base box)
# provision.yaml
using ansible.cfg
# roles/
│   ├── frontend/
│   │   └── tasks/main.yml
│   ├── backend/
│   │   └── tasks/main.yml
│   ├── database/
│   │   └── tasks/main.yml
├── vars/
│   └── main.yml
# docker container deployed using ansible
# github clone of the e-commerce app
├── explanation.md
├── README.md