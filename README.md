# Решение задачи Pick&Place

Версия ROS - Noetic

Выполнили: Ларченков Артем(R4136c), Максим Черницын(R4137c), Катерина Ан (R4136c)

![alt text](https://im.wampi.ru/2023/03/10/robor.png)

## Установка зависимостей и пакетов

**Проверка и обноление пакетов**

`sudo apt update`

`sudo apt upgrade`

`rosdep update`

**Установите catkin систему сборки ROS**

`sudo apt install ros-noetic-catkin python3-catkin-tools python3-osrf-pycommon`

**Установите wstool**

`sudo apt install python3-wstool`

**Установка пакетов panda_robot**

Перейдите по ссылке и выполните инструкции 

[Здесь](https://ros-planning.github.io/moveit_tutorials/doc/getting_started/getting_started.html)

**Также в catkin\src**

Hеобходимо склонировать репозиторий для работы со схватом

`git clone https://github.com/frankaemika/franka_ros.git`

## Замена файлов

Взять из нашего репозитория папку `panda_moveit_config` и заменить ее в репозитории робота.

Затем в пакете `franka_ros` аналогичным образом заменить `franka_gazebo`.

Понадобится собрать репозиторий `catkin_build`.

Прописать `source ~/ws_moveit/devel/setup.bash` 

## Запуск

`roslaunch panda_moveit_config demo_gazebo.launch world:=$(rospack find panda_moveit_config)/world/stone.sdf`

**Запуск скрипта управления**

`cd`

`cd src/control_script/scripts/`

**Запустить симуляцию pick&place**

 Прописать `source ~/ws_moveit/devel/setup.bash` 

`python3 cycle_script.py`

**Вспомогательный скрипт для отоброжения положения звеньев в [rad]**

 Прописать `source ~/ws_moveit/devel/setup.bash` 

`python3 check_joint_position.py`

**Вспомогательный скрипт для проверки эндефектора**

 Прописать `source ~/ws_moveit/devel/setup.bash` 

`python3 check_gripper.py`

