# CMake generated Testfile for 
# Source directory: /home/artem/ws_moveit/src/srdfdom
# Build directory: /home/artem/ws_moveit/build/srdfdom
# 
# This file includes the relevant testing commands required for 
# testing this directory and lists subdirectories to be tested as well.
add_test(_ctest_srdfdom_rostest_test_srdf_parser.test "/home/artem/ws_moveit/build/srdfdom/catkin_generated/env_cached.sh" "/usr/bin/python3" "/opt/ros/noetic/share/catkin/cmake/test/run_tests.py" "/home/artem/ws_moveit/build/srdfdom/test_results/srdfdom/rostest-test_srdf_parser.xml" "--return-code" "/usr/bin/python3 /opt/ros/noetic/share/rostest/cmake/../../../bin/rostest --pkgdir=/home/artem/ws_moveit/src/srdfdom --package=srdfdom --results-filename test_srdf_parser.xml --results-base-dir \"/home/artem/ws_moveit/build/srdfdom/test_results\" /home/artem/ws_moveit/src/srdfdom/test/srdf_parser.test ")
set_tests_properties(_ctest_srdfdom_rostest_test_srdf_parser.test PROPERTIES  _BACKTRACE_TRIPLES "/opt/ros/noetic/share/catkin/cmake/test/tests.cmake;160;add_test;/opt/ros/noetic/share/rostest/cmake/rostest-extras.cmake;52;catkin_run_tests_target;/home/artem/ws_moveit/src/srdfdom/CMakeLists.txt;53;add_rostest;/home/artem/ws_moveit/src/srdfdom/CMakeLists.txt;0;")
add_test(_ctest_srdfdom_rostest_test_srdf_parser_cpp.test "/home/artem/ws_moveit/build/srdfdom/catkin_generated/env_cached.sh" "/usr/bin/python3" "/opt/ros/noetic/share/catkin/cmake/test/run_tests.py" "/home/artem/ws_moveit/build/srdfdom/test_results/srdfdom/rostest-test_srdf_parser_cpp.xml" "--return-code" "/usr/bin/python3 /opt/ros/noetic/share/rostest/cmake/../../../bin/rostest --pkgdir=/home/artem/ws_moveit/src/srdfdom --package=srdfdom --results-filename test_srdf_parser_cpp.xml --results-base-dir \"/home/artem/ws_moveit/build/srdfdom/test_results\" /home/artem/ws_moveit/src/srdfdom/test/srdf_parser_cpp.test ")
set_tests_properties(_ctest_srdfdom_rostest_test_srdf_parser_cpp.test PROPERTIES  _BACKTRACE_TRIPLES "/opt/ros/noetic/share/catkin/cmake/test/tests.cmake;160;add_test;/opt/ros/noetic/share/rostest/cmake/rostest-extras.cmake;52;catkin_run_tests_target;/opt/ros/noetic/share/rostest/cmake/rostest-extras.cmake;80;add_rostest;/opt/ros/noetic/share/rostest/cmake/rostest-extras.cmake;100;_add_rostest_google_test;/home/artem/ws_moveit/src/srdfdom/CMakeLists.txt;63;add_rostest_gtest;/home/artem/ws_moveit/src/srdfdom/CMakeLists.txt;0;")
subdirs("gtest")
