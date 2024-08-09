/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface GelatoVRFConsumerBaseInterface extends Interface {
  getFunction(
    nameOrSignature: "fulfillRandomness" | "requestPending" | "requestedHash"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "RequestedRandomness"): EventFragment;

  encodeFunctionData(
    functionFragment: "fulfillRandomness",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "requestPending",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "requestedHash",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "fulfillRandomness",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestPending",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestedHash",
    data: BytesLike
  ): Result;
}

export namespace RequestedRandomnessEvent {
  export type InputTuple = [round: BigNumberish, data: BytesLike];
  export type OutputTuple = [round: bigint, data: string];
  export interface OutputObject {
    round: bigint;
    data: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface GelatoVRFConsumerBase extends BaseContract {
  connect(runner?: ContractRunner | null): GelatoVRFConsumerBase;
  waitForDeployment(): Promise<this>;

  interface: GelatoVRFConsumerBaseInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  fulfillRandomness: TypedContractMethod<
    [randomness: BigNumberish, dataWithRound: BytesLike],
    [void],
    "nonpayable"
  >;

  requestPending: TypedContractMethod<[arg0: BigNumberish], [boolean], "view">;

  requestedHash: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "fulfillRandomness"
  ): TypedContractMethod<
    [randomness: BigNumberish, dataWithRound: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "requestPending"
  ): TypedContractMethod<[arg0: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "requestedHash"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  getEvent(
    key: "RequestedRandomness"
  ): TypedContractEvent<
    RequestedRandomnessEvent.InputTuple,
    RequestedRandomnessEvent.OutputTuple,
    RequestedRandomnessEvent.OutputObject
  >;

  filters: {
    "RequestedRandomness(uint256,bytes)": TypedContractEvent<
      RequestedRandomnessEvent.InputTuple,
      RequestedRandomnessEvent.OutputTuple,
      RequestedRandomnessEvent.OutputObject
    >;
    RequestedRandomness: TypedContractEvent<
      RequestedRandomnessEvent.InputTuple,
      RequestedRandomnessEvent.OutputTuple,
      RequestedRandomnessEvent.OutputObject
    >;
  };
}
