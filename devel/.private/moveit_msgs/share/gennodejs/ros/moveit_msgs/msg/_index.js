
"use strict";

let ExecuteTrajectoryFeedback = require('./ExecuteTrajectoryFeedback.js');
let ExecuteTrajectoryGoal = require('./ExecuteTrajectoryGoal.js');
let MoveGroupActionFeedback = require('./MoveGroupActionFeedback.js');
let PlaceFeedback = require('./PlaceFeedback.js');
let PickupGoal = require('./PickupGoal.js');
let MoveGroupFeedback = require('./MoveGroupFeedback.js');
let MoveGroupAction = require('./MoveGroupAction.js');
let PlaceResult = require('./PlaceResult.js');
let PlaceAction = require('./PlaceAction.js');
let ExecuteTrajectoryResult = require('./ExecuteTrajectoryResult.js');
let MoveGroupSequenceActionFeedback = require('./MoveGroupSequenceActionFeedback.js');
let PickupAction = require('./PickupAction.js');
let MoveGroupSequenceFeedback = require('./MoveGroupSequenceFeedback.js');
let MoveGroupSequenceAction = require('./MoveGroupSequenceAction.js');
let PickupActionFeedback = require('./PickupActionFeedback.js');
let MoveGroupResult = require('./MoveGroupResult.js');
let ExecuteTrajectoryActionFeedback = require('./ExecuteTrajectoryActionFeedback.js');
let PickupResult = require('./PickupResult.js');
let ExecuteTrajectoryAction = require('./ExecuteTrajectoryAction.js');
let MoveGroupActionGoal = require('./MoveGroupActionGoal.js');
let ExecuteTrajectoryActionResult = require('./ExecuteTrajectoryActionResult.js');
let PickupFeedback = require('./PickupFeedback.js');
let MoveGroupSequenceResult = require('./MoveGroupSequenceResult.js');
let MoveGroupSequenceActionResult = require('./MoveGroupSequenceActionResult.js');
let PlaceActionGoal = require('./PlaceActionGoal.js');
let ExecuteTrajectoryActionGoal = require('./ExecuteTrajectoryActionGoal.js');
let PickupActionResult = require('./PickupActionResult.js');
let PlaceActionResult = require('./PlaceActionResult.js');
let MoveGroupSequenceActionGoal = require('./MoveGroupSequenceActionGoal.js');
let MoveGroupActionResult = require('./MoveGroupActionResult.js');
let PickupActionGoal = require('./PickupActionGoal.js');
let PlaceGoal = require('./PlaceGoal.js');
let MoveGroupGoal = require('./MoveGroupGoal.js');
let PlaceActionFeedback = require('./PlaceActionFeedback.js');
let MoveGroupSequenceGoal = require('./MoveGroupSequenceGoal.js');
let GenericTrajectory = require('./GenericTrajectory.js');
let OrientationConstraint = require('./OrientationConstraint.js');
let CartesianTrajectory = require('./CartesianTrajectory.js');
let AllowedCollisionMatrix = require('./AllowedCollisionMatrix.js');
let GripperTranslation = require('./GripperTranslation.js');
let RobotState = require('./RobotState.js');
let RobotTrajectory = require('./RobotTrajectory.js');
let DisplayTrajectory = require('./DisplayTrajectory.js');
let PlanningSceneWorld = require('./PlanningSceneWorld.js');
let Grasp = require('./Grasp.js');
let PlaceLocation = require('./PlaceLocation.js');
let TrajectoryConstraints = require('./TrajectoryConstraints.js');
let AllowedCollisionEntry = require('./AllowedCollisionEntry.js');
let CostSource = require('./CostSource.js');
let LinkPadding = require('./LinkPadding.js');
let OrientedBoundingBox = require('./OrientedBoundingBox.js');
let PlannerInterfaceDescription = require('./PlannerInterfaceDescription.js');
let MotionPlanDetailedResponse = require('./MotionPlanDetailedResponse.js');
let PlanningOptions = require('./PlanningOptions.js');
let CartesianTrajectoryPoint = require('./CartesianTrajectoryPoint.js');
let JointConstraint = require('./JointConstraint.js');
let Constraints = require('./Constraints.js');
let PlanningScene = require('./PlanningScene.js');
let VisibilityConstraint = require('./VisibilityConstraint.js');
let PositionIKRequest = require('./PositionIKRequest.js');
let PlanningSceneComponents = require('./PlanningSceneComponents.js');
let PlannerParams = require('./PlannerParams.js');
let CollisionObject = require('./CollisionObject.js');
let MotionPlanRequest = require('./MotionPlanRequest.js');
let ObjectColor = require('./ObjectColor.js');
let DisplayRobotState = require('./DisplayRobotState.js');
let PositionConstraint = require('./PositionConstraint.js');
let LinkScale = require('./LinkScale.js');
let WorkspaceParameters = require('./WorkspaceParameters.js');
let JointLimits = require('./JointLimits.js');
let ConstraintEvalResult = require('./ConstraintEvalResult.js');
let MotionSequenceRequest = require('./MotionSequenceRequest.js');
let MotionSequenceItem = require('./MotionSequenceItem.js');
let BoundingVolume = require('./BoundingVolume.js');
let MotionPlanResponse = require('./MotionPlanResponse.js');
let CartesianPoint = require('./CartesianPoint.js');
let ContactInformation = require('./ContactInformation.js');
let MotionSequenceResponse = require('./MotionSequenceResponse.js');
let MoveItErrorCodes = require('./MoveItErrorCodes.js');
let AttachedCollisionObject = require('./AttachedCollisionObject.js');
let KinematicSolverInfo = require('./KinematicSolverInfo.js');

module.exports = {
  ExecuteTrajectoryFeedback: ExecuteTrajectoryFeedback,
  ExecuteTrajectoryGoal: ExecuteTrajectoryGoal,
  MoveGroupActionFeedback: MoveGroupActionFeedback,
  PlaceFeedback: PlaceFeedback,
  PickupGoal: PickupGoal,
  MoveGroupFeedback: MoveGroupFeedback,
  MoveGroupAction: MoveGroupAction,
  PlaceResult: PlaceResult,
  PlaceAction: PlaceAction,
  ExecuteTrajectoryResult: ExecuteTrajectoryResult,
  MoveGroupSequenceActionFeedback: MoveGroupSequenceActionFeedback,
  PickupAction: PickupAction,
  MoveGroupSequenceFeedback: MoveGroupSequenceFeedback,
  MoveGroupSequenceAction: MoveGroupSequenceAction,
  PickupActionFeedback: PickupActionFeedback,
  MoveGroupResult: MoveGroupResult,
  ExecuteTrajectoryActionFeedback: ExecuteTrajectoryActionFeedback,
  PickupResult: PickupResult,
  ExecuteTrajectoryAction: ExecuteTrajectoryAction,
  MoveGroupActionGoal: MoveGroupActionGoal,
  ExecuteTrajectoryActionResult: ExecuteTrajectoryActionResult,
  PickupFeedback: PickupFeedback,
  MoveGroupSequenceResult: MoveGroupSequenceResult,
  MoveGroupSequenceActionResult: MoveGroupSequenceActionResult,
  PlaceActionGoal: PlaceActionGoal,
  ExecuteTrajectoryActionGoal: ExecuteTrajectoryActionGoal,
  PickupActionResult: PickupActionResult,
  PlaceActionResult: PlaceActionResult,
  MoveGroupSequenceActionGoal: MoveGroupSequenceActionGoal,
  MoveGroupActionResult: MoveGroupActionResult,
  PickupActionGoal: PickupActionGoal,
  PlaceGoal: PlaceGoal,
  MoveGroupGoal: MoveGroupGoal,
  PlaceActionFeedback: PlaceActionFeedback,
  MoveGroupSequenceGoal: MoveGroupSequenceGoal,
  GenericTrajectory: GenericTrajectory,
  OrientationConstraint: OrientationConstraint,
  CartesianTrajectory: CartesianTrajectory,
  AllowedCollisionMatrix: AllowedCollisionMatrix,
  GripperTranslation: GripperTranslation,
  RobotState: RobotState,
  RobotTrajectory: RobotTrajectory,
  DisplayTrajectory: DisplayTrajectory,
  PlanningSceneWorld: PlanningSceneWorld,
  Grasp: Grasp,
  PlaceLocation: PlaceLocation,
  TrajectoryConstraints: TrajectoryConstraints,
  AllowedCollisionEntry: AllowedCollisionEntry,
  CostSource: CostSource,
  LinkPadding: LinkPadding,
  OrientedBoundingBox: OrientedBoundingBox,
  PlannerInterfaceDescription: PlannerInterfaceDescription,
  MotionPlanDetailedResponse: MotionPlanDetailedResponse,
  PlanningOptions: PlanningOptions,
  CartesianTrajectoryPoint: CartesianTrajectoryPoint,
  JointConstraint: JointConstraint,
  Constraints: Constraints,
  PlanningScene: PlanningScene,
  VisibilityConstraint: VisibilityConstraint,
  PositionIKRequest: PositionIKRequest,
  PlanningSceneComponents: PlanningSceneComponents,
  PlannerParams: PlannerParams,
  CollisionObject: CollisionObject,
  MotionPlanRequest: MotionPlanRequest,
  ObjectColor: ObjectColor,
  DisplayRobotState: DisplayRobotState,
  PositionConstraint: PositionConstraint,
  LinkScale: LinkScale,
  WorkspaceParameters: WorkspaceParameters,
  JointLimits: JointLimits,
  ConstraintEvalResult: ConstraintEvalResult,
  MotionSequenceRequest: MotionSequenceRequest,
  MotionSequenceItem: MotionSequenceItem,
  BoundingVolume: BoundingVolume,
  MotionPlanResponse: MotionPlanResponse,
  CartesianPoint: CartesianPoint,
  ContactInformation: ContactInformation,
  MotionSequenceResponse: MotionSequenceResponse,
  MoveItErrorCodes: MoveItErrorCodes,
  AttachedCollisionObject: AttachedCollisionObject,
  KinematicSolverInfo: KinematicSolverInfo,
};
