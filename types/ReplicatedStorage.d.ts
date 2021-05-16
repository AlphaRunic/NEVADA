interface ReplicatedStorage extends Instance {
	TS: Folder & {
		Carbon: Folder & {
			Classes: Folder & {
				Client: Folder & {
					UI: ModuleScript;
					Wave: ModuleScript;
					Spring: ModuleScript;
					Tweenable: ModuleScript;
				};
				Utility: Folder & {
					CarbonClient: ModuleScript;
					Thread: ModuleScript;
					Pair: ModuleScript;
					Disposable: ModuleScript;
					ModelAnimator: ModuleScript;
				};
				Server: Folder & {
					DataBase: ModuleScript;
				};
			};
			Roact: Folder & {
				Components: Folder & {
					LoadScreen: ModuleScript;
					Window: ModuleScript;
				};
				Styles: Folder & {
					Centered: ModuleScript;
				};
			};
			GameComponents: Folder & {
				Client: Folder & {
					LoadScreenUI: ModuleScript;
				};
			};
			Framework: ModuleScript;
			Internal: Folder & {
				Component: ModuleScript;
				Exception: ModuleScript;
			};
			Remotes: ModuleScript;
			Utility: Folder & {
				WaitFor: ModuleScript;
				Teleport: ModuleScript;
				UI: ModuleScript & {
					Tween: ModuleScript;
					ClickPop: ModuleScript;
					GetScaledUDim: ModuleScript;
					AnimatedButtonDefault: ModuleScript;
					HoverPop: ModuleScript;
					LoadBar: ModuleScript;
				};
				Find: ModuleScript;
				FindAncestor: ModuleScript;
				IsNaN: ModuleScript;
			};
		};
	};
	Assets: Folder & {
		ViewModel: Model & {
			LeftUpperArm: MeshPart & {
				LeftShoulderRigAttachment: Attachment & {
					OriginalPosition: Vector3Value;
				};
				LeftLowerArm: Motor6D;
				OriginalSize: Vector3Value;
				LeftShoulderAttachment: Attachment & {
					OriginalPosition: Vector3Value;
				};
				LeftElbowRigAttachment: Attachment & {
					OriginalPosition: Vector3Value;
				};
			};
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			RightUpperArm: MeshPart & {
				RightLowerArm: Motor6D;
				OriginalSize: Vector3Value;
				RightElbowRigAttachment: Attachment & {
					OriginalPosition: Vector3Value;
				};
				RightShoulderRigAttachment: Attachment & {
					OriginalPosition: Vector3Value;
				};
				RightShoulderAttachment: Attachment & {
					OriginalPosition: Vector3Value;
				};
			};
			LeftHand: MeshPart & {
				LeftGripAttachment: Attachment & {
					OriginalPosition: Vector3Value;
				};
				OriginalSize: Vector3Value;
				LeftWristRigAttachment: Attachment & {
					OriginalPosition: Vector3Value;
				};
			};
			LeftLowerArm: MeshPart & {
				LeftElbowRigAttachment: Attachment & {
					OriginalPosition: Vector3Value;
				};
				LeftHand: Motor6D;
				OriginalSize: Vector3Value;
				LeftWristRigAttachment: Attachment & {
					OriginalPosition: Vector3Value;
				};
			};
			Primary: Part & {
				LeftUpperArm: Motor6D;
				RightUpperArm: Motor6D;
				OriginalSize: Vector3Value;
				RootRigAttachment: Attachment & {
					OriginalPosition: Vector3Value;
				};
			};
			RightHand: MeshPart & {
				RightWristRigAttachment: Attachment & {
					OriginalPosition: Vector3Value;
				};
				RightGripAttachment: Attachment & {
					OriginalPosition: Vector3Value;
				};
				OriginalSize: Vector3Value;
			};
			RightLowerArm: MeshPart & {
				RightWristRigAttachment: Attachment & {
					OriginalPosition: Vector3Value;
				};
				RightHand: Motor6D;
				OriginalSize: Vector3Value;
				RightElbowRigAttachment: Attachment & {
					OriginalPosition: Vector3Value;
				};
			};
		};
	};
	rbxts_include: Folder & {
		RuntimeLib: ModuleScript;
		Promise: ModuleScript;
		node_modules: Folder & {
			datastore2: Folder & {
				src: ModuleScript & {
					Verifier: ModuleScript;
					Promise: ModuleScript;
					SavingMethods: ModuleScript & {
						OrderedBackups: ModuleScript;
						Standard: ModuleScript;
					};
					Settings: ModuleScript;
					TableUtil: ModuleScript;
					Constants: ModuleScript;
				};
			};
			abbreviate: Folder & {
				src: ModuleScript & {
					commify: ModuleScript;
					numberToString: ModuleScript;
					setSetting: ModuleScript;
					numbersToSortedString: ModuleScript;
					stringToNumber: ModuleScript;
				};
			};
			services: ModuleScript;
			["camera-shaker"]: Folder & {
				CameraShaker: ModuleScript & {
					CameraShakeInstance: ModuleScript;
					CameraShakePresets: ModuleScript;
				};
			};
			make: ModuleScript & {
				node_modules: Folder & {
					["@rbxts"]: Folder & {
						["compiler-types"]: Folder & {
							types: Folder;
						};
					};
				};
			};
			["fast-wait"]: Folder & {
				src: ModuleScript;
				out: ModuleScript;
			};
			types: Folder & {
				include: Folder & {
					generated: Folder;
				};
			};
			["object-event"]: ModuleScript;
			net: Folder & {
				out: ModuleScript & {
					definitions: ModuleScript & {
						ClientDefinitionBuilder: ModuleScript;
						ServerDefinitionBuilder: ModuleScript;
					};
					serialization: ModuleScript;
					client: ModuleScript & {
						ClientFunction: ModuleScript;
						ClientMessagingEvent: ModuleScript;
						ClientEvent: ModuleScript;
						ClientAsyncFunction: ModuleScript;
					};
					messaging: Folder & {
						MessagingService: ModuleScript;
						MessagingEvent: ModuleScript;
					};
					middleware: ModuleScript & {
						RateLimitMiddleware: ModuleScript & {
							throttle: ModuleScript;
						};
						LoggerMiddleware: ModuleScript;
						TypeCheckMiddleware: ModuleScript;
					};
					internal: ModuleScript & {
						validator: ModuleScript;
						tables: ModuleScript;
					};
					configuration: ModuleScript;
					server: ModuleScript & {
						ServerEvent: ModuleScript;
						ServerAsyncFunction: ModuleScript;
						MiddlewareFunction: ModuleScript;
						ServerFunction: ModuleScript;
						CreateServerListener: ModuleScript;
						ServerMessagingEvent: ModuleScript;
						MiddlewareEvent: ModuleScript;
					};
				};
			};
			t: Folder & {
				lib: Folder & {
					ts: ModuleScript;
				};
			};
			maid: Folder & {
				Maid: ModuleScript;
			};
			snapdragon: Folder & {
				src: ModuleScript & {
					objectAssign: ModuleScript;
					SnapdragonRef: ModuleScript;
					SnapdragonController: ModuleScript;
					Symbol: ModuleScript;
					t: ModuleScript;
					Maid: ModuleScript;
					Signal: ModuleScript;
				};
			};
			roact: Folder & {
				src: ModuleScript & {
					createSpy: ModuleScript;
					createElement: ModuleScript;
					oneChild: ModuleScript;
					RobloxRenderer: ModuleScript;
					createSignal: ModuleScript;
					assertDeepEqual: ModuleScript;
					getDefaultInstanceProperty: ModuleScript;
					invalidSetStateMessages: ModuleScript;
					Binding: ModuleScript;
					internalAssert: ModuleScript;
					NoopRenderer: ModuleScript;
					createReconciler: ModuleScript;
					GlobalConfig: ModuleScript;
					strict: ModuleScript;
					createReconcilerCompat: ModuleScript;
					assign: ModuleScript;
					createRef: ModuleScript;
					Type: ModuleScript;
					Portal: ModuleScript;
					Symbol: ModuleScript;
					PropMarkers: Folder & {
						Ref: ModuleScript;
						Change: ModuleScript;
						Children: ModuleScript;
						Event: ModuleScript;
					};
					createContext: ModuleScript;
					createFragment: ModuleScript;
					ElementUtils: ModuleScript;
					ComponentLifecyclePhase: ModuleScript;
					Config: ModuleScript;
					ElementKind: ModuleScript;
					PureComponent: ModuleScript;
					Logging: ModuleScript;
					Component: ModuleScript;
					SingleEventManager: ModuleScript;
					None: ModuleScript;
				};
			};
			rain: Folder & {
				src: ModuleScript;
			};
			device: Folder & {
				out: ModuleScript & {
					Device: ModuleScript;
				};
			};
			promisify: Folder & {
				roblox: Folder & {
					out: ModuleScript & {
						builtins: ModuleScript;
						promisify: ModuleScript;
					};
				};
			};
			["character-viewport"]: Folder & {
				out: ModuleScript;
			};
			["premium-wrapper"]: Folder & {
				src: ModuleScript & {
					Connection: ModuleScript;
					lib: Folder & {
						t: ModuleScript;
					};
					typings: Folder;
				};
				["package-lock"]: ModuleScript;
			};
			["compiler-types"]: Folder & {
				types: Folder;
			};
			objecthighlighter: Folder & {
				lib: ModuleScript & {
					createRenderer: ModuleScript;
					Implementations: ModuleScript & {
						highlightColor: ModuleScript;
						worldColor: ModuleScript;
					};
					ObjectRefMap: ModuleScript;
					createInstanceCopy: ModuleScript & {
						createBasePartCopy: ModuleScript;
					};
					Renderer: ModuleScript;
					createFromTarget: ModuleScript;
					ViewportFrame: ModuleScript;
					Highlight: ModuleScript;
				};
			};
		};
	};
}
