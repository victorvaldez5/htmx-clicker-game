import 'config/base.just'

project_slug := 'clicker-game'

# List available commands
@_default:
    just -l

# Remove extra Django Base Site files not needed in a new project
@clean_extra_files:
    rm -f LICENSE.md
    rm -f README.md
    rm -f CHANGELOG.md
    rm -rf docs/
    rm -rf .github/
    rm -rf .readthedocs.yaml
    rm -r scripts/start_new_project

# Upgrade both Python and Node
@upgrade_all_packages:
    # kill all running containers
    docker stop $(docker ps -a -q) || true
    # remove all stopped containers
    docker rm $(docker ps -a -q) || true
    just upgrade_python_packages
    just upgrade_node_packages
    just build
    just pre_commit
